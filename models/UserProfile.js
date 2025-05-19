// models/UserProfile.js
import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  name: String,
  username: String,
  dob: Date,
  profileImage: String, // New field for base64 image
});

export default mongoose.model("UserProfile", userProfileSchema);
