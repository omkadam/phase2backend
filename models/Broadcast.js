import mongoose from "mongoose";

// Comment schema for individual comments
const commentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  userAvatar: { type: String }, // Optional: store user avatar URL
  content: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

// Like schema to track who liked
const likeSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const broadcastSchema = new mongoose.Schema({
  name: String,
  slug: { type: String, unique: true },
  description: String,
  posts: [
    {
      title: String,
      content: String,
      images: [String], // Array to store image URLs
      date: { type: Date, default: Date.now },
      likes: [likeSchema], // Array of users who liked this post
      comments: [commentSchema] // Array of comments on this post
    }
  ]
});

export default mongoose.model("Broadcast", broadcastSchema);