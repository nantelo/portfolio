import { Router } from "express";
import {
  getProjects,
  getSkills,
  createProject,
  createSkill,
} from "../controllers/portfolioController.js";

const router = Router();

router.get("/projects", getProjects);
router.get("/skills", getSkills);

// Simple admin endpoints (no auth — add JWT before deploying publicly)
router.post("/projects", createProject);
router.post("/skills", createSkill);

export default router;
