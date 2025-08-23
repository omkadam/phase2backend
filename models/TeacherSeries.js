import mongoose from "mongoose";

const teachersquestionSchema = new mongoose.Schema({
  type: { type: String, default: "mcq" },
  allowCustomAnswer: { type: Boolean, default: false },
  anyOptionCorrect: { type: Boolean, default: false }, // ✅ New field for any correct option
  image: { type: String },
  question: {
    en: { type: String },
    hi: { type: String },
  },
  questionAudio: {
    en: { type: String },
    hi: { type: String },
  },
  options: {
    en: [
      {
        text: String,
        image: String,
        audio: String,
      },
    ],
    hi: [
      {
        text: String,
        image: String,
        audio: String,
      },
    ],
  },
  correct: {
    en: { type: String },
    hi: { type: String },
  },
  pages: {
    en: [
      {
        image: { type: String },
        audio: { type: String }, // Added audio field for each page
        hardWords: [{ type: String }],
        speakText: { type: String }, // ✅ Added for voice recognition
        
      },
    ],
    hi: [
      {
        image: { type: String },
        audio: { type: String }, // Added audio field for each page
        hardWords: [{ type: String }],
      },
    ],
  },
  readAloudText: {
    en: { type: String },
    hi: { type: String },
  },
});

const teacherslessonSchema = new mongoose.Schema({
  lessonId: String,
  questions: [teachersquestionSchema],
});

const teachersunitSchema = new mongoose.Schema({
  title: {
    en: { type: String },
    hi: { type: String },
  },
  subtitle: {
    en: { type: String },
    hi: { type: String },
  },
  image: { type: String, required: true },
  particularUnitImage: {type: String, required: true},
  particularUnitImageTest: {
    en: {type: String},
    hi: {type: String}
  },
  
  particularUnitDesc: {
    en: {type: String},
    hi: {type: String}
  },
  riveAnimations: {
    en: [{ type: String }],
    hi: [{ type: String }]
  },
  themeColor: {type: String},
  borderBottomColor: {type: String},
  steps: { type: Number, default: 0 },
  lessons: [teacherslessonSchema],
});

const teachersseriesSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: {
    en: { type: String },
    hi: { type: String },
  },
  subtitle: {
    en: { type: String },
    hi: { type: String },
  },
  image: { type: String },
  units: [teachersunitSchema],
});

export default mongoose.model("teachersseries", teachersseriesSchema);
