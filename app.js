import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import seriesRoutes from "./routes/series.js";
import feelingRoutes from "./routes/feeling.js";
import broadcastsRouter from "./routes/broadcasts.js";
import profileRoutes from "./routes/profile.js";
import userProfileRoutes from "./routes/userProfile.js";
import leaderboardRoutes from "./routes/leaderboard.js"; // 👈 Import it

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Karu13AWSec2:Karu13AWSec2@cluster0.h0fpy5z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// ✅ API routes
app.use("/uploads", express.static("uploads"));
app.use("/api/series", seriesRoutes);
app.use("/api/feeling", feelingRoutes);
app.use("/api/broadcasts", broadcastsRouter);
app.use("/api/profile", profileRoutes); // profile creation
app.use("/api/user-profile", userProfileRoutes); // profile checking
app.use("/api/leaderboard", leaderboardRoutes); // 👈 Mount route

app.listen(3001, () => console.log("🚀 Server running on port 3001"));
