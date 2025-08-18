import express from "express";
import Series from "../models/Series.js";
import UserProgress from "../models/UserProgress.js";
import Broadcast from "../models/Broadcast.js";
import Parent from "../models/Parent.js";
import Idea from "../models/Idea.js";
import BedtimeStory from "../models/BedtimeStory.js"; // ✅ NEW - Add this import

const router = express.Router();

// ====================================
// ✅ BEDTIME STORIES ROUTES - MUST BE BEFORE DYNAMIC ROUTES
// ====================================

// GET all bedtime stories
router.get("/bedtime-stories", async (req, res) => {
  try {
    const stories = await BedtimeStory.find({ isActive: true }).sort({ createdAt: -1 });
    res.json(stories);
  } catch (error) {
    console.error("Error fetching bedtime stories:", error);
    res.status(500).json({ error: "Failed to fetch bedtime stories" });
  }
});

// GET single bedtime story by ID
router.get("/bedtime-stories/:storyId", async (req, res) => {
  try {
    const { storyId } = req.params;
    const story = await BedtimeStory.findOne({ storyId, isActive: true });
    
    if (!story) {
      return res.status(404).json({ error: "Story not found" });
    }
    
    res.json(story);
  } catch (error) {
    console.error("Error fetching bedtime story:", error);
    res.status(500).json({ error: "Failed to fetch bedtime story" });
  }
});

// POST create new bedtime story (admin route)
router.post("/bedtime-stories", async (req, res) => {
  try {
    const newStory = new BedtimeStory(req.body);
    const savedStory = await newStory.save();
    res.status(201).json(savedStory);
  } catch (error) {
    console.error("Error creating bedtime story:", error);
    res.status(500).json({ error: "Failed to create bedtime story" });
  }
});

// PUT update bedtime story (admin route)
router.put("/bedtime-stories/:storyId", async (req, res) => {
  try {
    const { storyId } = req.params;
    const updatedStory = await BedtimeStory.findOneAndUpdate(
      { storyId },
      { ...req.body, updatedAt: new Date() },
      { new: true }
    );
    
    if (!updatedStory) {
      return res.status(404).json({ error: "Story not found" });
    }
    
    res.json(updatedStory);
  } catch (error) {
    console.error("Error updating bedtime story:", error);
    res.status(500).json({ error: "Failed to update bedtime story" });
  }
});

// DELETE bedtime story (soft delete)
router.delete("/bedtime-stories/:storyId", async (req, res) => {
  try {
    const { storyId } = req.params;
    const deletedStory = await BedtimeStory.findOneAndUpdate(
      { storyId },
      { isActive: false, updatedAt: new Date() },
      { new: true }
    );
    
    if (!deletedStory) {
      return res.status(404).json({ error: "Story not found" });
    }
    
    res.json({ message: "Story deleted successfully" });
  } catch (error) {
    console.error("Error deleting bedtime story:", error);
    res.status(500).json({ error: "Failed to delete bedtime story" });
  }
});

// GET bedtime story listening progress for user
router.get("/bedtime-stories/:storyId/progress/:userId", async (req, res) => {
  try {
    const { storyId, userId } = req.params;
    
    let progress = await UserProgress.findOne({ userId });
    
    if (!progress || !progress.bedtimeStoryProgress) {
      return res.json({
        success: true,
        currentTime: 0,
        completed: false,
        lastPlayed: null
      });
    }
    
    const storyProgress = progress.bedtimeStoryProgress.get(storyId);
    
    if (!storyProgress) {
      return res.json({
        success: true,
        currentTime: 0,
        completed: false,
        lastPlayed: null
      });
    }
    
    res.json({
      success: true,
      currentTime: storyProgress.currentTime || 0,
      completed: storyProgress.completed || false,
      lastPlayed: storyProgress.lastPlayed || null
    });
  } catch (error) {
    console.error("Error fetching story progress:", error);
    res.status(500).json({ error: "Failed to fetch story progress" });
  }
});

// POST update bedtime story listening progress
router.post("/bedtime-stories/:storyId/progress/:userId", async (req, res) => {
  try {
    const { storyId, userId } = req.params;
    const { currentTime, completed = false } = req.body;
    
    let progress = await UserProgress.findOne({ userId });
    
    if (!progress) {
      progress = new UserProgress({ userId });
    }
    
    if (!progress.bedtimeStoryProgress) {
      progress.bedtimeStoryProgress = new Map();
    }
    
    const storyProgress = {
      currentTime: currentTime || 0,
      completed,
      lastPlayed: new Date()
    };
    
    progress.bedtimeStoryProgress.set(storyId, storyProgress);
    await progress.save();
    
    res.json({
      success: true,
      message: "Story progress updated",
      progress: storyProgress
    });
  } catch (error) {
    console.error("Error updating story progress:", error);
    res.status(500).json({ error: "Failed to update story progress" });
  }
});

// GET user's bedtime story statistics
router.get("/bedtime-stories/stats/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    
    const totalStories = await BedtimeStory.countDocuments({ isActive: true });
    
    let progress = await UserProgress.findOne({ userId });
    let completedStories = 0;
    let listeningTime = 0;
    
    if (progress && progress.bedtimeStoryProgress) {
      progress.bedtimeStoryProgress.forEach((storyProgress) => {
        if (storyProgress.completed) {
          completedStories++;
        }
        listeningTime += storyProgress.currentTime || 0;
      });
    }
    
    const completionRate = totalStories > 0 ? (completedStories / totalStories * 100).toFixed(1) : 0;
    
    res.json({
      success: true,
      stats: {
        totalStories,
        completedStories,
        listeningTime: Math.floor(listeningTime / 60), // Convert to minutes
        completionRate: parseFloat(completionRate)
      }
    });
  } catch (error) {
    console.error("Error fetching bedtime story stats:", error);
    res.status(500).json({ error: "Failed to fetch bedtime story statistics" });
  }
});

// ✅ Broadcasts list
router.get("/broadcasts", async (req, res) => {
  const channels = await Broadcast.find({}, "name slug description");
  res.json(channels);
});

// ✅ Subscribe user to broadcast
router.post("/broadcasts/:slug/subscribe/:userId", async (req, res) => {
  const { slug, userId } = req.params;
  await UserProgress.updateOne(
    { userId },
    { $addToSet: { broadcastSubscriptions: slug } },
    { upsert: true }
  );
  res.json({ success: true });
});

// ✅ Get posts from broadcast
router.get("/broadcasts/:slug/posts", async (req, res) => {
  const { slug } = req.params;
  const channel = await Broadcast.findOne({ slug });
  if (!channel) return res.status(404).json({ error: "Channel not found" });
  res.json(channel.posts);
});

// ====================================
// ✅ IDEAS / PLANNING ROUTES
// ====================================

// GET /api/series/ideas/:userId - Fetch all ideas for a user
router.get("/ideas/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const ideas = await Idea.find({ userId })
      .sort({ createdAt: -1 })
      .exec();
    
    res.json({ 
      success: true, 
      ideas 
    });
  } catch (error) {
    console.error('Error fetching ideas:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch ideas' 
    });
  }
});

// POST /api/series/ideas/:userId - Add new idea
router.post("/ideas/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const { text, completed = false } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({ 
        success: false, 
        error: 'Idea text is required' 
      });
    }

    const newIdea = new Idea({
      userId,
      text: text.trim(),
      completed,
      createdAt: new Date()
    });

    const savedIdea = await newIdea.save();
    res.status(201).json(savedIdea);
  } catch (error) {
    console.error('Error adding idea:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to add idea' 
    });
  }
});

// PATCH /api/series/ideas/:userId/:ideaId - Update idea
router.patch("/ideas/:userId/:ideaId", async (req, res) => {
  try {
    const { userId, ideaId } = req.params;
    const { completed } = req.body;

    const updateData = { completed };
    if (completed) {
      updateData.completedAt = new Date();
    } else {
      updateData.completedAt = null;
    }

    const updatedIdea = await Idea.findOneAndUpdate(
      { _id: ideaId, userId },
      updateData,
      { new: true }
    );

    if (!updatedIdea) {
      return res.status(404).json({ 
        success: false, 
        error: 'Idea not found' 
      });
    }

    res.json(updatedIdea);
  } catch (error) {
    console.error('Error updating idea:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to update idea' 
    });
  }
});

// DELETE /api/series/ideas/:userId/:ideaId - Delete idea
router.delete("/ideas/:userId/:ideaId", async (req, res) => {
  try {
    const { userId, ideaId } = req.params;

    const deletedIdea = await Idea.findOneAndDelete({ 
      _id: ideaId, 
      userId 
    });

    if (!deletedIdea) {
      return res.status(404).json({ 
        success: false, 
        error: 'Idea not found' 
      });
    }

    res.json({ 
      success: true, 
      message: 'Idea deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting idea:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to delete idea' 
    });
  }
});

// GET /api/series/ideas/:userId/stats - Get idea statistics
router.get("/ideas/:userId/stats", async (req, res) => {
  try {
    const { userId } = req.params;
    
    const totalIdeas = await Idea.countDocuments({ userId });
    const completedIdeas = await Idea.countDocuments({ userId, completed: true });
    const pendingIdeas = totalIdeas - completedIdeas;
    
    const completionRate = totalIdeas > 0 ? (completedIdeas / totalIdeas * 100).toFixed(1) : 0;

    res.json({
      success: true,
      stats: {
        totalIdeas,
        completedIdeas,
        pendingIdeas,
        completionRate: parseFloat(completionRate)
      }
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch statistics' 
    });
  }
});

// ====================================
// ✅ EPISODE ROUTES
// ====================================

// GET /api/series/episodes/:userId - Get user's episode progress
router.get("/episodes/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Find user's progress (episodes are stored in UserProgress)
    let progress = await UserProgress.findOne({ userId });
    
    if (!progress) {
      // Create default progress with episode 1 unlocked
      progress = await UserProgress.create({
        userId,
        unlockedEpisodes: [1],
        completedEpisodes: []
      });
    }
    
    // Initialize episode arrays if they don't exist
    if (!progress.unlockedEpisodes) {
      progress.unlockedEpisodes = [1];
      await progress.save();
    }
    if (!progress.completedEpisodes) {
      progress.completedEpisodes = [];
      await progress.save();
    }
    
    res.json({
      success: true,
      unlockedEpisodes: progress.unlockedEpisodes,
      completedEpisodes: progress.completedEpisodes
    });
  } catch (error) {
    console.error('Error fetching episode progress:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch episode progress' 
    });
  }
});

// POST /api/series/episodes/:userId/unlock - Unlock new episode
router.post("/episodes/:userId/unlock", async (req, res) => {
  try {
    const { userId } = req.params;
    const { episodeNumber } = req.body;
    
    if (!episodeNumber) {
      return res.status(400).json({ 
        success: false, 
        error: 'Episode number is required' 
      });
    }
    
    // Find or create user progress
    let progress = await UserProgress.findOne({ userId });
    
    if (!progress) {
      progress = new UserProgress({
        userId,
        unlockedEpisodes: [1],
        completedEpisodes: []
      });
    }
    
    // Initialize arrays if they don't exist
    if (!progress.unlockedEpisodes) {
      progress.unlockedEpisodes = [1];
    }
    if (!progress.completedEpisodes) {
      progress.completedEpisodes = [];
    }
    
    // Add episode to unlocked episodes if not already unlocked
    if (!progress.unlockedEpisodes.includes(episodeNumber)) {
      progress.unlockedEpisodes.push(episodeNumber);
      progress.unlockedEpisodes.sort((a, b) => a - b); // Keep sorted
    }
    
    await progress.save();
    
    res.json({
      success: true,
      message: `Episode ${episodeNumber} unlocked successfully`,
      unlockedEpisodes: progress.unlockedEpisodes,
      completedEpisodes: progress.completedEpisodes
    });
  } catch (error) {
    console.error('Error unlocking episode:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to unlock episode' 
    });
  }
});

// POST /api/series/episodes/:userId/:episodeId/complete - Mark episode as completed
router.post("/episodes/:userId/:episodeId/complete", async (req, res) => {
  try {
    const { userId, episodeId } = req.params;
    const episodeNumber = parseInt(episodeId);
    
    if (!episodeNumber) {
      return res.status(400).json({ 
        success: false, 
        error: 'Valid episode ID is required' 
      });
    }
    
    // Find user progress
    let progress = await UserProgress.findOne({ userId });
    
    if (!progress) {
      return res.status(404).json({ 
        success: false, 
        error: 'User progress not found' 
      });
    }
    
    // Initialize arrays if they don't exist
    if (!progress.completedEpisodes) {
      progress.completedEpisodes = [];
    }
    
    // Check if episode is unlocked
    if (!progress.unlockedEpisodes || !progress.unlockedEpisodes.includes(episodeNumber)) {
      return res.status(403).json({ 
        success: false, 
        error: 'Episode is not unlocked' 
      });
    }
    
    // Add episode to completed episodes if not already completed
    if (!progress.completedEpisodes.includes(episodeNumber)) {
      progress.completedEpisodes.push(episodeNumber);
      progress.completedEpisodes.sort((a, b) => a - b); // Keep sorted
    }
    
    await progress.save();
    
    res.json({
      success: true,
      message: `Episode ${episodeNumber} marked as completed`,
      completedEpisodes: progress.completedEpisodes
    });
  } catch (error) {
    console.error('Error completing episode:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to complete episode' 
    });
  }
});

// GET /api/series/episodes/:userId/stats - Get episode statistics
router.get("/episodes/:userId/stats", async (req, res) => {
  try {
    const { userId } = req.params;
    
    const progress = await UserProgress.findOne({ userId });
    
    if (!progress) {
      return res.json({
        success: true,
        stats: {
          totalUnlocked: 1,
          totalCompleted: 0,
          completionRate: 0
        }
      });
    }
    
    const totalUnlocked = progress.unlockedEpisodes ? progress.unlockedEpisodes.length : 1;
    const totalCompleted = progress.completedEpisodes ? progress.completedEpisodes.length : 0;
    const completionRate = totalUnlocked > 0 ? (totalCompleted / totalUnlocked * 100).toFixed(1) : 0;
    
    res.json({
      success: true,
      stats: {
        totalUnlocked,
        totalCompleted,
        completionRate: parseFloat(completionRate)
      }
    });
  } catch (error) {
    console.error('Error fetching episode stats:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch episode statistics' 
    });
  }
});

// ====================================
// ✅ DYNAMIC SERIES ROUTES - MUST BE AFTER SPECIFIC ROUTES
// ====================================

// Get series data
router.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  const series = await Series.findOne({ slug });
  if (!series) return res.status(404).json({ error: "Series not found" });
  res.json(series);
});

// Get lesson by series and lessonId
router.get("/:slug/lesson/:lessonId", async (req, res) => {
  const { slug, lessonId } = req.params;
  console.log("Received slug:", slug);
  console.log("Received lessonId:", lessonId);

  const series = await Series.findOne({ slug });
  if (!series) {
    console.log("Series not found");
    return res.status(404).json({ error: "Series not found" });
  }

  const [unitPart, lessonPart] = lessonId.replace("lesson-", "").split("-");
  const unitIndex = parseInt(unitPart, 10) - 1;
  const lessonIndex = parseInt(lessonPart, 10) - 1;

  console.log("Unit Index:", unitIndex);
  console.log("Lesson Index:", lessonIndex);

  const unit = series.units?.[unitIndex];
  if (!unit) {
    console.log("Unit not found");
    return res.status(404).json({ error: "Unit not found" });
  }

  const lesson = unit?.lessons?.[lessonIndex];
  if (!lesson) {
    console.log("Lesson not found");
    return res.status(404).json({ error: "Lesson not found" });
  }

  console.log("Retrieved Lesson:", JSON.stringify(lesson, null, 2));
  res.json(lesson);
});

// Get user progress
router.get("/:slug/progress/:userId", async (req, res) => {
  const { slug, userId } = req.params;
  const series = await Series.findOne({ slug });
  if (!series) return res.status(404).json({ error: "Series not found" });

  let progress = await UserProgress.findOne({ userId, seriesSlug: slug });
  if (!progress) {
    progress = await UserProgress.create({
      userId,
      seriesSlug: slug,
      unlockedLessons: [0],
      isSubscribed: false,
    });
  }

  if (progress.isSubscribed) {
    const newUnlocks = [];
    series.units.forEach((unit, unitIndex) => {
      const firstLessonGlobalIndex = unitIndex * 100;
      if (!progress.unlockedLessons.includes(firstLessonGlobalIndex)) {
        newUnlocks.push(firstLessonGlobalIndex);
      }
    });
    if (newUnlocks.length > 0) {
      progress.unlockedLessons.push(...newUnlocks);
      await progress.save();
    }
  }

  res.json({
    unlockedLessons: progress.unlockedLessons ?? [],
    isSubscribed: progress.isSubscribed,
    xp: progress.xp,
    hearts: progress.hearts,
    lessonProgress: progress.lessonProgress || {},
    broadcastSubscriptions: progress.broadcastSubscriptions || [],
  });
});

// Unlock next lesson
router.post("/:slug/progress/:userId", async (req, res) => {
  const { slug, userId } = req.params;
  const { nextLessonGlobalIndex } = req.body;

  let progress = await UserProgress.findOne({ userId, seriesSlug: slug });
  if (!progress) {
    progress = await UserProgress.create({
      userId,
      seriesSlug: slug,
      unlockedLessons: [0],
    });
  }

  if (!progress.unlockedLessons.includes(nextLessonGlobalIndex)) {
    progress.unlockedLessons.push(nextLessonGlobalIndex);
  }

  await progress.save();

  res.json({
    unlockedLessons: progress.unlockedLessons,
    xp: progress.xp,
    hearts: progress.hearts,
  });
});

// ✅ PATCH XP/Hearts + Custom Answer Tracking
router.patch("/:slug/progress/:userId", async (req, res) => {
  try {
    const { slug, userId } = req.params;
    const {
      xpChange = 0,
      heartChange = 0,
      lessonId,
      userAnswer,
      questionIndex = 0,
      lastCompletedQuestionIndex,
    } = req.body;

    console.log("👉 Received userAnswer:", userAnswer);
    console.log("👉 Lesson ID:", lessonId);

    let progress = await UserProgress.findOne({ userId, seriesSlug: slug });

    if (!progress) {
      progress = new UserProgress({ userId, seriesSlug: slug });
    }

    // XP / Hearts update
    progress.xp = Math.max(0, (progress.xp || 0) + xpChange);
    if (req.body.setHearts !== undefined) {
      progress.hearts = Math.min(5, req.body.setHearts); // clamp max to 5
    } else {
      progress.hearts = Math.max(0, (progress.hearts || 5) + heartChange);
    }

    // ✅ Save lesson progress
    if (lessonId && lastCompletedQuestionIndex !== undefined) {
      progress.lessonProgress.set(lessonId, lastCompletedQuestionIndex);
    }

    // ✅ Save user custom answer
    if (lessonId && userAnswer !== undefined) {
      if (!progress.lessons) progress.lessons = [];

      let lessonProgress = progress.lessons.find(
        (l) => l.lessonId === lessonId
      );

      if (!lessonProgress) {
        lessonProgress = { lessonId, answers: [] };
        progress.lessons.push(lessonProgress);
      }

      while (lessonProgress.answers.length <= questionIndex) {
        lessonProgress.answers.push("");
      }

      lessonProgress.answers[questionIndex] = userAnswer;
    }

    await progress.save();
    res.status(200).json(progress);
  } catch (err) {
    console.error("❌ Error updating user progress:", err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/", async (req, res) => {
  console.log("👉 Received data:", req.body);
  const newSeries = new Series(req.body);
  try {
    const savedSeries = await newSeries.save();
    res.status(200).json(savedSeries);
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ message: "Failed to add series", error: err });
  }
});

// ✅ Save MBTI Parenting Response
router.post("/parents/save", async (req, res) => {
  const { userId, questionId, questionType, answer } = req.body;

  if (!userId || !questionId || !questionType || !answer) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    let parent = await Parent.findOne({ userId });

    const newResponse = {
      questionId,
      questionType,
      answer,
      timestamp: new Date(),
    };

    if (!parent) {
      parent = new Parent({
        userId,
        responses: [newResponse],
      });
    } else {
      parent.responses.push(newResponse);
    }

    await parent.save();
    res.status(200).json({ success: true, message: "Response saved", parent });
  } catch (error) {
    console.error("❌ Error saving parenting response:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ Save MBTI + Parenting Style Results
router.patch("/mbti-result/:userId", async (req, res) => {
  const { userId } = req.params;
  const { mbtiResult } = req.body;

  if (!mbtiResult || typeof mbtiResult !== "object") {
    return res.status(400).json({ error: "Invalid MBTI result format" });
  }

  const {
    mbti,
    parentType,
    dominantStyle,
    dominantTA,
    dominantTAChild,
    unmetNeedsResults,
    attachmentStyles,
    dominantAttachment,
    familySystemTheory,
    dominantFamilySystem,
    familyLegacyThemes,
    dominantFamilyLegacyTheme,
    familySystemTheoryGrowing,
    dominantGrowingRole,
  } = mbtiResult;

  if (!mbti || !parentType || !dominantStyle) {
    return res.status(400).json({ error: "Missing MBTI or parenting data" });
  }

  try {
    const parent = await Parent.findOneAndUpdate(
      { userId },
      {
        mbtiResult: mbti,
        parentingStyle: dominantStyle,
        parentingScores: parentType,
        dominantTA: dominantTA,
        dominantTAChild: dominantTAChild,
        unmetNeeds: unmetNeedsResults,
        attachmentStyles: attachmentStyles,
        dominantAttachment: dominantAttachment,
        familySystemTheory: familySystemTheory,
        dominantFamilySystem: dominantFamilySystem,
        familyLegacyThemes: familyLegacyThemes,
        dominantFamilyLegacyTheme: dominantFamilyLegacyTheme,
        familySystemTheoryGrowing: familySystemTheoryGrowing,
        dominantGrowingRole: dominantGrowingRole,
      },
      { new: true, upsert: true }
    );

    res.json({ success: true, parent });
  } catch (err) {
    console.error("❌ Error saving MBTI result:", err);
    res.status(500).json({ error: "Failed to save MBTI result" });
  }
});

export default router;