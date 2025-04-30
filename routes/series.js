import express from "express";
import Series from "../models/Series.js";
import UserProgress from "../models/UserProgress.js";
import Broadcast from "../models/Broadcast.js"; // ✅ Added this line

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

// Update user progress
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

// Update XP, Hearts, and Lesson Progress
router.patch("/:slug/progress/:userId", async (req, res) => {
  const { slug, userId } = req.params;
  const { xpChange = 0, heartChange = 0, lessonId, lastCompletedQuestionIndex } = req.body;

  const progress = await UserProgress.findOne({ userId, seriesSlug: slug });
  if (!progress) return res.status(404).json({ error: "Progress not found." });

  progress.xp = Math.max(0, progress.xp + xpChange);
  progress.hearts = Math.max(0, progress.hearts + heartChange);

  if (lessonId !== undefined && lastCompletedQuestionIndex !== undefined) {
    progress.lessonProgress.set(lessonId, lastCompletedQuestionIndex);
  }

  await progress.save();
  res.json({ xp: progress.xp, hearts: progress.hearts });
});


// ✅ Broadcast endpoints
router.get("/broadcasts", async (req, res) => {
  const channels = await Broadcast.find({}, "name slug description");
  res.json(channels);
});

router.post("/broadcasts/:slug/subscribe/:userId", async (req, res) => {
  const { slug, userId } = req.params;
  await UserProgress.updateOne(
    { userId },
    { $addToSet: { broadcastSubscriptions: slug } },
    { upsert: true }
  );
  res.json({ success: true });
});

router.get("/broadcasts/:slug/posts", async (req, res) => {
  const { slug } = req.params;
  const channel = await Broadcast.findOne({ slug });
  if (!channel) return res.status(404).json({ error: "Channel not found" });
  res.json(channel.posts);
});

export default router;
