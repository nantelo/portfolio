import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import portfolioRoutes from "./routes/portfolioRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    // Comma-separated list in production, e.g.
    // CLIENT_URL=https://your-site.netlify.app,http://localhost:5173
    origin: (process.env.CLIENT_URL || "http://localhost:5173").split(","),
  })
);
app.use(express.json());

app.get("/api/health", (req, res) => res.json({ status: "ok" }));
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/contact", contactRoutes);

// 404 handler
app.use((req, res) => res.status(404).json({ error: "Route not found" }));

// Central error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || "Server error" });
});


const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI ;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    const server = app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );

    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        console.error(
          `Port ${PORT} is already in use. Stop the other process or change PORT in server/.env.`
        );
        process.exit(1);
      }
      throw err;
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
