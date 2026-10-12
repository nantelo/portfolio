import mongoose from "mongoose";
import dotenv from "dotenv";

import Project from "./models/Project.js";
import Skill from "./models/Skill.js";

dotenv.config();

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/portfolio";

const projects = [
  {
    title: "Inventory Management System",
    description:
      "Full inventory system with adding, deleting, updating and displaying items, built with C++.",
    tech: ["C++", "OOP", "File Handling"],
    link: "",
    order: 1,
  },
   {
    title: "Shopping list card manager",
    description:
      "A simple full stack shopping list manager with card-based UI.",
    tech: ["React", "mongodb", "node.js", "express"],
    link: "https://p-managercart.netlify.app/",
    order: 2,
  },
  {
    title: "YouTube Clone",
    description:
      "Pixel-accurate YouTube homepage clone built with pure HTML and CSS.",
    tech: ["HTML", "CSS", "Responsive Design"],
    link: "https://nantelo.github.io/youtubeclone/",
    order: 3,
  },
  {
    title: "E-Commerce Frontend",
    description:
      "Digital marketing / e-commerce site with full client-side form validation.",
    tech: ["HTML", "CSS", "JavaScript", "Form Validation"],
    link: "https://nantelo.github.io/DigitalMarketingSite/",
    order: 4,
  },
  {
    title: "Event Management System",
    description:
      "Event booking platform with payment integration and dynamic event pages.",
    tech: ["HTML", "CSS", "JavaScript", "Payments"],
    link: "https://nantelo.github.io/eventmanagementpage/",
    order: 5,
  },
];

const skills = [
  { name: "React", level: 80, category: "frontend" },
  { name: "HTML / CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 78, category: "frontend" },
  { name: "Node.js", level: 72, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "database" },
  { name: "C++", level: 85, category: "tools" },
  { name: "Git / GitHub", level: 80, category: "tools" },
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected. Clearing old data...");
    await Promise.all([
      Project.deleteMany({}),
      Skill.deleteMany({}),
    ]);
    await Project.insertMany(projects);
    await Skill.insertMany(skills);
    console.log(`Seeded ${projects.length} projects, ${skills.length} skills.`);
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("Seed failed:", err.message);
    process.exit(1);
  }
}

seed();
