import mongoose from "mongoose";

const bedtimeStorySchema = new mongoose.Schema({
  storyId: { type: String, required: true, unique: true },
  storyName: {
    en: { type: String, required: true },
    hi: { type: String, required: true },
  },
  aboutStory: {
    en: { type: String, required: true },
    hi: { type: String, required: true },
  },
  storyThumbnail: { type: String, required: true },
  audioLink: {
    en: { type: String, required: true },
    hi: { type: String, required: true },
  },
  duration: { type: String }, // e.g., "4:55"
  year: { type: Number, default: new Date().getFullYear() },
  category: {
    en: { type: String, default: "Bedtime Stories" },
    hi: { type: String, default: "सोने की कहानियाँ" },
  },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Update the updatedAt field before saving
bedtimeStorySchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.model("BedtimeStory", bedtimeStorySchema);