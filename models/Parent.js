// import mongoose from "mongoose";

// const responseSchema = new mongoose.Schema({
//   questionId: Number,
//   questionType: { type: String, enum: ["base", "followup"] },
//   answer: String,
//   timestamp: { type: Date, default: Date.now },
// });

// const parentSchema = new mongoose.Schema({
//   userId: { type: String, required: true },
//   responses: [responseSchema],
//   mbtiResult: { type: String }, // ✅ Add this here
// });

// export default mongoose.models.Parent || mongoose.model("Parent", parentSchema);

import mongoose from "mongoose";

const responseSchema = new mongoose.Schema({
  questionId: Number,
  questionType: { type: String, enum: ["base", "followup"] },
  answer: String,
  timestamp: { type: Date, default: Date.now },
});

const parentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  responses: [responseSchema],
  mbtiResult: { type: String }, // "ISTJ", "ENFP", etc.
  parentingStyle: { type: String }, // "Authoritative", etc.
  parentingScores: {
    Authoritative: { type: Number, default: 0 },
    Authoritarian: { type: Number, default: 0 },
    Permissive: { type: Number, default: 0 },
    Uninvolved: { type: Number, default: 0 },
  },
  dominantTA: { type: String }, // ✅ NEW FIELD
  dominantTAChild: { type: String }, // new field for dominantTAChild
  unmetNeeds: { type: Object },
  attachmentStyles: {
    Secure: { type: Number, default: 0 },
    Avoidant: { type: Number, default: 0 },
    Anxious: { type: Number, default: 0 },
    Disorganized: { type: Number, default: 0 },
  },
  dominantAttachment: { type: String }, // ✅ NEW FIELD
  familySystemTheory: {
    healthyBoundaries: { type: Number, default: 0 },
    enmeshedBoundaries: { type: Number, default: 0 },
    disengagedBoundaries: { type: Number, default: 0 },
  },
  dominantFamilySystem: { type: String }, // ✅ NEW FIELD
  familyLegacyThemes: {
    Reparenting: { type: Number, default: 0 },
    "Repeating Pattern": { type: Number, default: 0 },
    Overcorrecting: { type: Number, default: 0 },
  },
  dominantFamilyLegacyTheme: { type: String },
  familySystemTheoryGrowing: {
    caregiver: { type: Number, default: 0 },
    peacemaker: { type: Number, default: 0 },
    rebel: { type: Number, default: 0 },
    invisible: { type: Number, default: 0 },
  },
  dominantGrowingRole: { type: String },
});

export default mongoose.models.Parent || mongoose.model("Parent", parentSchema);
