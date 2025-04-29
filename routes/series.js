import express from "express";
import Series from "../models/Series.js";
import UserProgress from "../models/UserProgress.js";

const router = express.Router();

// Get series data
router.get("/:slug", async (req, res) => {
  const { slug } = req.params;

  const series = await Series.findOne({ slug });

  if (!series) {
    return res.status(404).json({ error: "Series not found" });
  }

  res.json(series);
});

// Get lesson by series and lessonId
router.get("/:slug/lesson/:lessonId", async (req, res) => {
  const { slug, lessonId } = req.params;

  const series = await Series.findOne({ slug });

  if (!series) {
    return res.status(404).json({ error: "Series not found" });
  }

  // lessonId is like "lesson-1-1" => split it
  const [unitPart, lessonPart] = lessonId.replace("lesson-", "").split("-");
  const unitIndex = parseInt(unitPart, 10) - 1;    // -1 because index starts from 0
  const lessonIndex = parseInt(lessonPart, 10) - 1;

  const unit = series.units?.[unitIndex];
  const lesson = unit?.lessons?.[lessonIndex];

  if (!lesson) {
    return res.status(404).json({ error: "Lesson not found" });
  }

  res.json(lesson);
});

// Get user progress
router.get("/:slug/progress/:userId", async (req, res) => {
  const { slug, userId } = req.params;
  const series = await Series.findOne({ slug });

  if (!series) {
    return res.status(404).json({ error: "Series not found" });
  }

  let progress = await UserProgress.findOne({ userId, seriesSlug: slug });

  if (!progress) {
    progress = await UserProgress.create({
      userId,
      seriesSlug: slug,
      unlockedLessons: [0],
      isSubscribed: false,
    });
  }

  // ✅ If subscribed, unlock first lesson of all units if not already unlocked
  if (progress.isSubscribed) {
    const newUnlocks = [];

    series.units.forEach((unit, unitIndex) => {
      const firstLessonGlobalIndex = unitIndex * 100 + 0; // Lesson-1 of unit
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
  });
});

// Update user progress
router.post("/:slug/progress/:userId", async (req, res) => {
  const { slug, userId } = req.params;
  const { nextLessonGlobalIndex } = req.body; // 💥 new field

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

  // Lesson completed → reset lessonProgress[lessonId] = -1 (optional if needed)

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

  if (!progress) {
    return res.status(404).json({ error: "Progress not found." });
  }

  progress.xp = Math.max(0, progress.xp + xpChange);
  progress.hearts = Math.max(0, progress.hearts + heartChange);

  if (lessonId !== undefined && lastCompletedQuestionIndex !== undefined) {
    progress.lessonProgress.set(lessonId, lastCompletedQuestionIndex);
  }

  await progress.save();

  res.json({ xp: progress.xp, hearts: progress.hearts });
});

export default router;
