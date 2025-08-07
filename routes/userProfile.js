// routes/userProfile.js
import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
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
    // const profileImageUrl = `https://sochu.online/uploads/${req.file.filename}`;

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

// Set profilePopupShown to true
router.post("/:userId/popup-shown", async (req, res) => {
  const { userId } = req.params;

  try {
    const updatedProfile = await UserProfile.findOneAndUpdate(
      { userId },
      { $set: { profilePopupShown: true } },
      { new: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json({ message: "Popup flag updated", profile: updatedProfile });
  } catch (err) {
    console.error("Error updating popup flag:", err);
    res.status(500).json({ message: "Error updating popup flag" });
  }
});

// Delete Account Route
router.delete("/:userId/delete", async (req, res) => {
  const { userId } = req.params;

  try {
    console.log(`Starting account deletion process for user: ${userId}`);

    // Find the user profile first to get the profile image path
    const userProfile = await UserProfile.findOne({ userId });
    
    // Don't return 404 if profile doesn't exist - still need to clean other data
    if (!userProfile) {
      console.log(`⚠️ No profile found for user ${userId}, but continuing with cleanup of other data`);
    }

    // Delete profile image from filesystem if it exists
    if (userProfile && userProfile.profileImage) {
      try {
        // Extract filename from the URL
        const imageUrl = userProfile.profileImage;
        const filename = imageUrl.split('/').pop(); // Gets the filename from URL
        const imagePath = path.join('./uploads/', filename);
        
        // Check if file exists and delete it
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
          console.log(`✅ Deleted profile image: ${imagePath}`);
        }
      } catch (imageError) {
        console.error("❌ Error deleting profile image:", imageError);
        // Continue with deletion even if image deletion fails
      }
    }

    // Import all required models
    const { default: UserProgress } = await import("../models/UserProgress.js");
    const { default: FeelingLog } = await import("../models/FeelingLog.js");
    
    // Start deletion process for all user-related data
    const deletionPromises = [];
    let deletionResults = {
      userprofiles: 0,
      userprogresses: 0,
      feelinglogs: 0
    };

    // 1. Delete from userprofiles collection (only if profile exists)
    if (userProfile) {
      deletionPromises.push(
        UserProfile.findOneAndDelete({ userId })
          .then(() => {
            deletionResults.userprofiles = 1;
            console.log(`✅ Deleted from userprofiles collection for user: ${userId}`);
          })
          .catch(err => console.error(`❌ Error deleting from userprofiles:`, err))
      );
    } else {
      console.log(`ℹ️ No profile to delete from userprofiles collection`);
    }

    // 2. Delete from userprogresses collection
    deletionPromises.push(
      UserProgress.deleteMany({ userId })
        .then(result => {
          deletionResults.userprogresses = result.deletedCount;
          console.log(`✅ Deleted ${result.deletedCount} records from userprogresses collection for user: ${userId}`);
        })
        .catch(err => console.error(`❌ Error deleting from userprogresses:`, err))
    );

    // 3. Delete from feelinglogs collection
    deletionPromises.push(
      FeelingLog.deleteMany({ userId })
        .then(result => {
          deletionResults.feelinglogs = result.deletedCount;
          console.log(`✅ Deleted ${result.deletedCount} records from feelinglogs collection for user: ${userId}`);
        })
        .catch(err => console.error(`❌ Error deleting from feelinglogs:`, err))
    );

    // Note: The following collections are NOT deleted as they don't contain user-specific data:
    // - broadcasts: Contains general broadcast content (not user-specific)
    // - series: Contains course/series content (shared across all users)
    // - parents: May contain parent/guardian data (would need separate handling if user-specific)

    // Execute all deletions concurrently
    await Promise.allSettled(deletionPromises);

    // Calculate total records deleted
    const totalDeleted = deletionResults.userprofiles + deletionResults.userprogresses + deletionResults.feelinglogs;

    console.log(`🎉 Successfully completed account deletion process for user: ${userId}`);
    console.log(`📊 Deletion summary:`, deletionResults);

    res.status(200).json({ 
      message: "Account deletion completed successfully. All user data has been permanently removed.",
      deletedUserId: userId,
      deletionSummary: deletionResults,
      totalRecordsDeleted: totalDeleted
    });

  } catch (error) {
    console.error("❌ Error deleting account:", error);
    res.status(500).json({ 
      message: "Failed to delete account. Please try again or contact support.",
      error: error.message 
    });
  }
});

export default router;