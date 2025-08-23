import express from "express";
import Series from "../models/Series.js";
import Parent from "../models/Parent.js";
import TeacherSeries from "../models/TeacherSeries.js";

const router = express.Router();

// ====================================
// TEACHERS ROUTES - MUST BE BEFORE DYNAMIC ROUTES
// ====================================

router.get("/teacher-framework", async (req, res) => {
  try {
    console.log("Fetching teacher series from database...");
    
    const teachersSeries = await TeacherSeries.find({});
    
    console.log("Found teacher series:", teachersSeries.length);
    
    if (!teachersSeries || teachersSeries.length === 0) {
      return res.status(200).json({ 
        success: true, 
        message: "No teacher series found", 
        data: [] 
      });
    }
    
    res.status(200).json({
      success: true,
      message: "Teacher series fetched successfully",
      data: teachersSeries
    });
    
  } catch (error) {
    console.error("Error fetching teacher series:", error);
    res.status(500).json({ 
      success: false, 
      error: "Internal server error", 
      message: error.message 
    });
  }
});

// Alternative route with different endpoint name (in case there's a conflict)
router.get("/teachers", async (req, res) => {
  try {
    console.log("Fetching teacher series from /teachers endpoint...");
    
    const teachersSeries = await TeacherSeries.find({});
    
    console.log("Found teacher series:", teachersSeries.length);
    
    res.status(200).json(teachersSeries);
    
  } catch (error) {
    console.error("Error fetching teacher series:", error);
    res.status(500).json({ 
      error: "Internal server error", 
      message: error.message 
    });
  }
});

export default router;