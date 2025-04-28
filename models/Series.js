import mongoose from "mongoose";

// Har question ka schema
const questionSchema = new mongoose.Schema({
  type: { type: String, default: "mcq" }, // "mcq", "match-the-pair", "crossword", "book"

  // For MCQ, Match-the-Pair, Crossword
  question: { type: String, required: false },
  options: { type: [String], required: false },
  correct: { type: String, required: false },

  // For Book Type
  pages: { type: [String], required: false }, // ✅ pages field for book type
});

// Lesson schema
const lessonSchema = new mongoose.Schema({
  lessonId: String, // e.g. "lesson-1"
  questions: [questionSchema], // ✅ multiple questions with type
});

// Series schema
const seriesSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: String,
  subtitle: String,
  image: String,
  steps: Number,
  lessons: [lessonSchema],
});

export default mongoose.model("Series", seriesSchema);
