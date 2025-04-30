import mongoose from "mongoose";

const broadcastSchema = new mongoose.Schema({
  name: String,
  slug: { type: String, unique: true },
  description: String,
  posts: [
    {
      title: String,
      content: String,
      date: { type: Date, default: Date.now }
    }
  ]
});

export default mongoose.model("Broadcast", broadcastSchema);