import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as Sentry from "@sentry/node";
import { ClerkWebHooks } from "./controllers/webhooks.js";

// import connectDB from './config/db.js';

// Initialize  express

const app = express();
app.use(express.json());

console.log("here server.js is going to start");

const dBurl =
  process.env.MONGODB_URI ||
  "mongodb+srv://vanshikasahu281105_db_user:g03E9Uey4YKWnkVd@cluster0.d7p8cot.mongodb.net/?appName=Cluster0";

  console.log("session end");

async function connectDB() {
  try {
    await mongoose.connect(dBurl);
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Database connection error:", err);
    process.exit(1);
  }
}

// connect to database
await connectDB();


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API working"));
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post("/webhooks", ClerkWebHooks);

// port
const PORT = process.env.PORT || 5000;
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
  console.log("Server is running on port:" + PORT);
});
