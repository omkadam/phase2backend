import express from "express";
import Series from "../models/Series.js";
import UserProgress from "../models/UserProgress.js";
import Broadcast from "../models/Broadcast.js";

const router = express.Router();

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
  const series = await Series.findOne({ slug });
  if (!series) return res.status(404).json({ error: "Series not found" });

  const [unitPart, lessonPart] = lessonId.replace("lesson-", "").split("-");
  const unitIndex = parseInt(unitPart, 10) - 1;
  const lessonIndex = parseInt(lessonPart, 10) - 1;

  const unit = series.units?.[unitIndex];
  const lesson = unit?.lessons?.[lessonIndex];

  if (!lesson) return res.status(404).json({ error: "Lesson not found" });
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
    progress.hearts = Math.max(0, (progress.hearts || 5) + heartChange);

    // ✅ Save lesson progress
    if (lessonId && lastCompletedQuestionIndex !== undefined) {
      progress.lessonProgress.set(lessonId, lastCompletedQuestionIndex);
    }

    // ✅ Save user custom answer
    if (lessonId && userAnswer !== undefined) {
      if (!progress.lessons) progress.lessons = [];

      let lessonProgress = progress.lessons.find((l) => l.lessonId === lessonId);

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

router.post("/", async (req, res) => {
  console.log("👉 Received data:", req.body); // Print the data to see what is received

  const newSeries = new Series(req.body);

  try {
    const savedSeries = await newSeries.save();
    res.status(200).json(savedSeries);
  } catch (err) {
    console.error("❌ Error:", err); // Log the error
    res.status(500).json({ message: "Failed to add series", error: err });
  }
});


export default router;
