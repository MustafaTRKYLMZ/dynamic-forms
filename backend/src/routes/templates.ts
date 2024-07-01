import { Router } from "express";
import {
  createTemplate,
  getTemplates,
} from "../controllers/templateController";

const router = Router();

router.post("/", createTemplate);
router.get("/", getTemplates);

export default router;
