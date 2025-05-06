// models/UserProfile.js
import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  name: String,
  username: String,
  dob: Date,
});

export default mongoose.model("UserProfile", userProfileSchema);
