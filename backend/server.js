import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import contactRouter from "./src/routes/contact.js";

const app = express();

// middleware
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));

// routes
app.get("/api/health", (_, res) => res.json({ ok: true }));
app.use("/api/contact", contactRouter);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Backend running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });
