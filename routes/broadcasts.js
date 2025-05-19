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


// Like a post
router.post('/:slug/posts/:postId/like', async (req, res) => {
  try {
    const { slug, postId } = req.params;
    const { userId, username } = req.body;

    const broadcast = await Broadcast.findOne({ slug });
    if (!broadcast) {
      return res.status(404).json({ error: 'Broadcast not found' });
    }

    const post = broadcast.posts.id(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Check if user already liked
    const existingLike = post.likes.find(like => like.userId === userId);
    
    if (existingLike) {
      // Unlike - remove the like
      post.likes = post.likes.filter(like => like.userId !== userId);
    } else {
      // Like - add the like
      post.likes.push({ userId, username });
    }

    await broadcast.save();
    res.json({ likes: post.likes });
  } catch (error) {
    console.error('Error handling like:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a comment to a post
router.post('/:slug/posts/:postId/comment', async (req, res) => {
  try {
    const { slug, postId } = req.params;
    const { userId, username, content } = req.body;

    if (!content || !content.trim()) {
      return res.status(400).json({ error: 'Comment content is required' });
    }

    const broadcast = await Broadcast.findOne({ slug });
    if (!broadcast) {
      return res.status(404).json({ error: 'Broadcast not found' });
    }

    const post = broadcast.posts.id(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Add the comment
    post.comments.push({
      userId,
      username,
      content: content.trim()
    });

    await broadcast.save();
    res.json({ comments: post.comments });
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get comments for a specific post (optional - if you want to fetch comments separately)
router.get('/:slug/posts/:postId/comments', async (req, res) => {
  try {
    const { slug, postId } = req.params;
    
    const broadcast = await Broadcast.findOne({ slug });
    if (!broadcast) {
      return res.status(404).json({ error: 'Broadcast not found' });
    }

    const post = broadcast.posts.id(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post.comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
