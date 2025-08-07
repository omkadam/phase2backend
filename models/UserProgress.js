import mongoose from "mongoose";

const userProgressSchema = new mongoose.Schema({
  userId: String,
  seriesSlug: String,
  unlockedLessons: [Number],
  xp: { type: Number, default: 0 },
  hearts: { type: Number, default: 5 },
  lessonProgress: { type: Map, of: Number, default: {} },
  isSubscribed: { type: Boolean, default: false },

  // ✅ Broadcast subscriptions
  broadcastSubscriptions: { type: [String], default: [] },

  // ✅ User answers per lesson
  lessons: [
    {
      lessonId: String,
      answers: [String], // answer per question index
    }
  ],

  // ✅ NEW: Episode tracking fields
  unlockedEpisodes: { type: [Number], default: [1] }, // Episode 1 is always unlocked
  completedEpisodes: { type: [Number], default: [] },
});

export default mongoose.model("UserProgress", userProgressSchema);