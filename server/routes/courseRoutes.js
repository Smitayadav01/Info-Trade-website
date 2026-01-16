import express from "express";
import {
  getAllCourses,      // for USERS
  getAdminCourses,    // for ADMIN (new)
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";
import { authenticate, authorizeAdmin } from "../middleware/auth.js";

const router = express.Router();

// ---------- USER ROUTES ----------
router.get("/", getAllCourses);        // 👈 MAIN WEBSITE

// ---------- ADMIN ROUTES ----------
router.get("/admin/all", authenticate, authorizeAdmin, getAdminCourses);
router.get("/:id", getCourseById);
router.post("/", authenticate, authorizeAdmin, createCourse);
router.put("/:id", authenticate, authorizeAdmin, updateCourse);
router.delete("/:id", authenticate, authorizeAdmin, deleteCourse);

export default router;
