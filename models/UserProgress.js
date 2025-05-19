import mongoose from "mongoose";

const userProgressSchema = new mongoose.Schema({
  userId: String,
  seriesSlug: String,
  unlockedLessons: [Number],
  xp: { type: Number, default: 0 },
  hearts: { type: Number, default: 5 },
  lessonProgress: { type: Map, of: Number, default: {} },
  isSubscribed: { type: Boolean, default: false },

  // ✅ Naya field added to track subscribed broadcast channels
  broadcastSubscriptions: { type: [String], default: [] },

  // ✅ Add this to track user answers per lesson
  lessons: [
    {
      lessonId: String,
      answers: [String], // answer per question index
    }
  ],
});

export default mongoose.model("UserProgress", userProgressSchema);
