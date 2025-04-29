import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  type: { type: String, default: "mcq" },
  question: { type: String },
  options: { type: [String] },
  correct: { type: String },
  pages: { type: [String] }, // for book type
});

const lessonSchema = new mongoose.Schema({
  lessonId: String,
  questions: [questionSchema],
});

const unitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  image: { type: String, required: true },
  steps: { type: Number, default: 0 },
  lessons: [lessonSchema],
});

const seriesSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  subtitle: { type: String },
  image: { type: String },
  units: [unitSchema], // 🔥 Important: Units array
});

export default mongoose.model("Series", seriesSchema);
