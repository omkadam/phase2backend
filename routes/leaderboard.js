// routes/leaderboard.js
import express from "express";
import UserProgress from "../models/UserProgress.js";
import UserProfile from "../models/UserProfile.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Top 10 by XP
    const topUsers = await UserProgress.find({})
      .sort({ xp: -1 })
      .limit(10);

    const userIds = topUsers.map(u => u.userId);

    // Get their profiles
    const profiles = await UserProfile.find({ userId: { $in: userIds } });

    const leaderboard = topUsers.map(user => {
      const profile = profiles.find(p => p.userId === user.userId);
      return {
        name: profile?.name || "Unknown",
        username: profile?.username || "unknown",
        xp: user.xp,
      };
    });

    res.json(leaderboard);
  } catch (err) {
    console.error("Leaderboard error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
