import express from "express";
import FeelingLog from "../models/FeelingLog.js";

const router = express.Router();

// Save today's feeling
router.post("/:userId", async (req, res) => {
  const { userId } = req.params;
  const { feeling } = req.body;
  const today = new Date().toISOString().split("T")[0];

  let existing = await FeelingLog.findOne({ userId, date: today });

  if (!existing) {
    existing = await FeelingLog.create({ userId, date: today, feeling });
  } else {
    existing.feeling = feeling;
    await existing.save();
  }

  res.json({ message: "Feeling saved", data: existing });
});

// Get all feelings for a user
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  const feelings = await FeelingLog.find({ userId }).sort({ date: -1 });
  res.json(feelings);
});


router.get("/radar/:userId", async (req, res) => {
    const { userId } = req.params;
    const all = await FeelingLog.find({ userId });
  
    const categories = {
      Happy: 0,
      Sad: 0,
      Angry: 0,
      Afraid: 0,
    };
  
    const mapping = {
      Happy: "Happy",
      Confident: "Happy",
      Neutral: "Happy",
      Sad: "Sad",
      Tired: "Sad",
      Angry: "Angry",
      Frustrated: "Angry",
      Anxious: "Fearfull",
      Nervous: "Fearfull",
    };
  
    for (const log of all) {
      const mapped = mapping[log.feeling];
      if (mapped) {
        categories[mapped]++;
      }
    }
  
    res.json(Object.entries(categories).map(([name, value]) => ({ feeling: name, value })));
  });

export default router;
