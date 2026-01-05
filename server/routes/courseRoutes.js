import express from "express";
import {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";
import { authenticate, authorizeAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.post("/", authenticate, authorizeAdmin, createCourse);
router.put("/:id", authenticate, authorizeAdmin, updateCourse);
router.delete("/:id", authenticate, authorizeAdmin, deleteCourse);

export default router;
