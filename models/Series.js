import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  type: { type: String, default: "mcq" },
  allowCustomAnswer: {type: Boolean, default: false},
  image: {type: String},
  question: {
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
    en: [{ type: String }], // Book reading pages
    hi: [{ type: String }],
  },

  readAloudText: {
    en: { type: String },
    hi: { type: String },
  }
});

const lessonSchema = new mongoose.Schema({
  lessonId: String,
  questions: [questionSchema],
});

const unitSchema = new mongoose.Schema({
  title: {
    en: { type: String },
    hi: { type: String },
  },
  subtitle: {
    en: { type: String },
    hi: { type: String },
  },
  image: { type: String, required: true },
  steps: { type: Number, default: 0 },
  lessons: [lessonSchema],
});

const seriesSchema = new mongoose.Schema({
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
  units: [unitSchema],
});

export default mongoose.model("Series", seriesSchema);
