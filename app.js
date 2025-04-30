import express from "express";
import mongoose from "mongoose";
import seriesRoutes from "./routes/series.js";
import feelingRoutes from "./routes/feeling.js"; // ✅ import feeling route
import broadcastsRouter from "./routes/broadcasts.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/your-db-name");

app.use("/api/series", seriesRoutes);
app.use("/api/feeling", feelingRoutes); // ✅ mount the feeling route here
app.use("/api/broadcasts", broadcastsRouter);


app.listen(3001, () => console.log("Server running on port 3001"));
