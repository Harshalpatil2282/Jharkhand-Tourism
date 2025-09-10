import express from "express";
import mongoose from "mongoose";
// import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API is running..."));

mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/jtourism")
  .then(() => {
    app.listen(5000, () => console.log("✅ Server running at http://localhost:5000"));
  })
  .catch(err => console.error("❌ MongoDB error:", err));
