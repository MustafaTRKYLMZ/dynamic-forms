import { Router } from "express";
import { createEvent, getEvents } from "../controllers/eventController";

const router = Router();

router.post("/", createEvent);
router.get("/", getEvents);
//router.post("/:eventId/responses", addResponse);

export default router;
