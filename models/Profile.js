import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  name: String,
  username: String,
  dob: String,
});

export default mongoose.model("Profile", profileSchema);
