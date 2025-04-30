// routes/broadcasts.js

import express from "express";
import Broadcast from "../models/Broadcast.js";

const router = express.Router();

// ✅ Get all broadcast channels
router.get("/", async (req, res) => {
  const channels = await Broadcast.find({}, "name slug description");
  res.json(channels);
});

// ✅ Subscribe to a channel
router.post("/:slug/subscribe/:userId", async (req, res) => {
  const { slug, userId } = req.params;
  const UserProgress = (await import("../models/UserProgress.js")).default;

  await UserProgress.updateOne(
    { userId },
    { $addToSet: { broadcastSubscriptions: slug } },
    { upsert: true }
  );

  res.json({ success: true });
});

// ✅ Get posts of a channel
router.get("/:slug/posts", async (req, res) => {
  const { slug } = req.params;
  const channel = await Broadcast.findOne({ slug });
  if (!channel) return res.status(404).json({ error: "Channel not found" });
  res.json(channel.posts);
});

router.get("/user/:userId/posts", async (req, res) => {
    const { userId } = req.params;
    const UserProgress = (await import("../models/UserProgress.js")).default;
  
    const progress = await UserProgress.findOne({ userId });
    if (!progress || !progress.broadcastSubscriptions || progress.broadcastSubscriptions.length === 0) {
      return res.json([]); // koi subscription nahi
    }
  
    const posts = await Broadcast.find(
      { slug: { $in: progress.broadcastSubscriptions } },
      { posts: 1, slug: 1, name: 1, _id: 0 }
    );
  
    res.json(posts);
  });

export default router;
