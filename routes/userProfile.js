// routes/userProfile.js
import express from "express";
import UserProfile from "../models/UserProfile.js";

const router = express.Router();

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  const profile = await UserProfile.findOne({ userId });

  if (!profile) {
    return res.status(404).json({ message: "Profile not found" });
  }

  res.json(profile);
});

router.post("/:userId", async (req, res) => {
  const { userId } = req.params;
  const { name, username, dob } = req.body;

  const existing = await UserProfile.findOne({ userId });
  if (existing) {
    return res.status(200).json(existing); // already exists
  }

  const profile = await UserProfile.create({ userId, name, username, dob });
  res.status(201).json(profile);
});

export default router;
