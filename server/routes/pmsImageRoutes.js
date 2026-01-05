import express from "express";
import {
  getAllPMSImages,
  getPMSImageById,
  createPMSImage,
  updatePMSImage,
  deletePMSImage,
} from "../controllers/pmsImageController.js";
import { authenticate, authorizeAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllPMSImages);
router.get("/:id", getPMSImageById);
router.post("/", authenticate, authorizeAdmin, createPMSImage);
router.put("/:id", authenticate, authorizeAdmin, updatePMSImage);
router.delete("/:id", authenticate, authorizeAdmin, deletePMSImage);

export default router;
