import express from "express";
import Series from "../models/Series.js";
import UserProgress from "../models/UserProgress.js";

const router = express.Router();

// Get series data
router.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  const series = await Series.findOne({ slug });
  res.json(series);
});

// Get lesson by series and lessonId
router.get("/:slug/lesson/:lessonId", async (req, res) => {
  const { slug, lessonId } = req.params;
  const series = await Series.findOne({ slug });
  const lesson = series.lessons.find((l) => l.lessonId === lessonId);
  res.json(lesson || {});
});

// Get user progress
router.get("/:slug/progress/:userId", async (req, res) => {
  const { slug, userId } = req.params;
  let progress = await UserProgress.findOne({ userId, seriesSlug: slug });
  if (!progress) {
    progress = await UserProgress.create({ userId, seriesSlug: slug, unlockedLessons: [0] });
  }
  res.json({
    unlockedLessons: progress.unlockedLessons,
    xp: progress.xp,
    hearts: progress.hearts
  });
});

// Update user progress
router.post("/:slug/progress/:userId", async (req, res) => {
    const { slug, userId } = req.params;
    const { nextLessonIndex } = req.body;
  
    let progress = await UserProgress.findOne({ userId, seriesSlug: slug });
  
    if (!progress) {
      progress = await UserProgress.create({
        userId,
        seriesSlug: slug,
        unlockedLessons: [0],
      });
    }
  
    if (!progress.unlockedLessons.includes(nextLessonIndex)) {
      progress.unlockedLessons.push(nextLessonIndex);
    }
  
    await progress.save();
  
    res.json({
      unlockedLessons: progress.unlockedLessons,
      xp: progress.xp,
      hearts: progress.hearts,
    });
  });

// Update XP or hearts
router.patch("/:slug/progress/:userId", async (req, res) => {
    const { slug, userId } = req.params;
    const { xpChange = 0, heartChange = 0 } = req.body;
  
    const progress = await UserProgress.findOne({ userId, seriesSlug: slug });
  
    if (!progress) {
      return res.status(404).json({ error: "Progress not found." });
    }
  
    // Update XP & hearts, with limits
    progress.xp = Math.max(0, progress.xp + xpChange);
    progress.hearts = Math.max(0, progress.hearts + heartChange);
  
    await progress.save();
  
    res.json({ xp: progress.xp, hearts: progress.hearts });
  });

export default router;
