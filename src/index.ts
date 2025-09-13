import express, { Application, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import Location, { ILocation } from "./Model/Location";
import AreaSeeds, { IAreaSeeds } from "./Model/AreaSeeds";

dotenv.config();

const app: Application = express();

const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV || "development";
const MONGO_URL = process.env.MONGO_URL || "";

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: { message: err.message } });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT} | Env: ${NODE_ENV}`);
});

//http://localhost:4000/getLocation/?location=newcastle-under-lyme
app.get("/getLocation/?", async (req: Request, res: Response) => {
  const { location } = req.query;

  if (!location) {
    return res
      .status(400)
      .json({ error: "Missing or invalid 'location' parameter" });
  }

  try {
    const loc: ILocation | null = await Location.findOne({
      Name: req.query.location as string,
    });
    if (!loc) {
      return res.status(404).json({ error: "Location not found" });
    }
    return res.json(loc);
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
});

//http://localhost:4000/getLocationArea/?area=Basford
app.get("/getLocationArea/?", async (req: Request, res: Response) => {
  const { area } = req.query;

  if (!area) {
    return res
      .status(400)
      .json({ error: "Missing or invalid 'area' parameter" });
  }

  try {
    const areaData: IAreaSeeds | null = await AreaSeeds.findOne({ Name: area });
    if (!areaData) {
      return res.status(404).json({ error: "Area not found" });
    }
    return res.json(areaData);
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
});

export default app;
