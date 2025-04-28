import mongoose from "mongoose";

const feelingSchema = new mongoose.Schema({
  userId: String,
  date: String, // YYYY-MM-DD
  feeling: String,
});

export default mongoose.model("FeelingLog", feelingSchema);
