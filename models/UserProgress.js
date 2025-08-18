import mongoose from "mongoose";

const userProgressSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  seriesSlug: { type: String },
  unlockedLessons: [{ type: Number }],
  isSubscribed: { type: Boolean, default: false },
  xp: { type: Number, default: 0 },
  hearts: { type: Number, default: 5 },
  lessonProgress: { type: Map, of: Number },
  broadcastSubscriptions: [{ type: String }],
  
  // Episode progress
  unlockedEpisodes: [{ type: Number }],
  completedEpisodes: [{ type: Number }],
  
  // Bedtime story progress - NEW ADDITION
  bedtimeStoryProgress: {
    type: Map,
    of: {
      currentTime: { type: Number, default: 0 }, // Current playback position in seconds
      completed: { type: Boolean, default: false }, // Whether story was completed
      lastPlayed: { type: Date }, // Last time this story was played
    }
  },
  
  // Existing lesson answers tracking
  lessons: [{
    lessonId: { type: String },
    answers: [{ type: String }]
  }],
}, {
  timestamps: true
});

// Create compound index for efficient queries
userProgressSchema.index({ userId: 1, seriesSlug: 1 });
userProgressSchema.index({ userId: 1 });

export default mongoose.model("UserProgress", userProgressSchema);
    