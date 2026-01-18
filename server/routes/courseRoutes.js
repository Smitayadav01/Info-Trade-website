import express from "express";
import {
  getAllCourses,      
  getAdminCourses,    
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  getAdminCourseById
} from "../controllers/courseController.js";
import { authenticate, authorizeAdmin } from "../middleware/auth.js";

const router = express.Router();

// ---------- USER ROUTES ----------
router.get("/", getAllCourses);   // Public courses

// ---------- ADMIN ROUTES ----------
router.get("/admin/all", authenticate, authorizeAdmin, getAdminCourses);
router.get("/admin/:id", authenticate, authorizeAdmin, getAdminCourseById);

router.post("/", authenticate, authorizeAdmin, createCourse);
router.put("/:id", authenticate, authorizeAdmin, updateCourse);
router.delete("/:id", authenticate, authorizeAdmin, deleteCourse);

// ✅ KEEP THIS LAST
router.get("/:id", getCourseById);

export default router;
