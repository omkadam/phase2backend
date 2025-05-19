// routes/userProfile.js
import express from "express";
import multer from "multer";
import path from "path";
import UserProfile from "../models/UserProfile.js";

const router = express.Router();

// Configure Multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${req.params.userId}-${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

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

// Image Upload Route
router.post("/:userId/upload", upload.single("profileImage"), async (req, res) => {
  const { userId } = req.params;

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    const profileImageUrl = `http://localhost:3001/uploads/${req.file.filename}`;

    // Update or create profile with the new image
    let profile = await UserProfile.findOne({ userId });
    if (!profile) {
      profile = await UserProfile.create({ userId, profileImage: profileImageUrl });
    } else {
      profile.profileImage = profileImageUrl;
      await profile.save();
    }

    res.json({ profileImage: profileImageUrl });
  } catch (err) {
    console.error("Error saving profile image:", err);
    res.status(500).json({ message: "Error uploading profile image" });
  }
});

export default router;
