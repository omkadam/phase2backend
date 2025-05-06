// routes/userProfile.js
import express from "express";
import UserProfile from "../models/UserProfile.js"; // ✅ Make sure model is correct

const router = express.Router();

// Check if profile exists
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  const profile = await UserProfile.findOne({ userId });
  if (!profile) {
    return res.status(404).json({ message: "Profile not found" });
  }
  res.json(profile);
});

export default router;
