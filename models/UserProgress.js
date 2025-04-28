// models/UserProgress.js
import mongoose from "mongoose";

const userProgressSchema = new mongoose.Schema({
  userId: String,
  seriesSlug: String,
  unlockedLessons: [Number],
  xp: { type: Number, default: 0 },          // 💯 XP
  hearts: { type: Number, default: 5 },      // ❤️ Lives
});

export default mongoose.model("UserProgress", userProgressSchema);
