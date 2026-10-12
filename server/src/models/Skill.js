import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    level: { type: Number, min: 0, max: 100, default: 70 },
    category: {
      type: String,
      enum: ["frontend", "backend", "database", "tools"],
      default: "tools",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Skill", skillSchema);
