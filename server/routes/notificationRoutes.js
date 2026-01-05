import express from "express";
import {
  getAllNotifications,
  getNotificationById,
  createNotification,
  updateNotification,
  deleteNotification,
} from "../controllers/notificationController.js";
import { authenticate, authorizeAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllNotifications);
router.get("/:id", getNotificationById);
router.post("/", authenticate, authorizeAdmin, createNotification);
router.put("/:id", authenticate, authorizeAdmin, updateNotification);
router.delete("/:id", authenticate, authorizeAdmin, deleteNotification);

export default router;
