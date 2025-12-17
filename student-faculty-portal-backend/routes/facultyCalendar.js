import express from "express";
import CalendarEvent from "../models/CalendarEvent.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

/* ================= GET ALL EVENTS ================= */
router.get("/", protect, async (req, res) => {
  try {
    const events = await CalendarEvent.find({
      facultyId: req.user.id,
    }).sort({ date: 1 });

    res.json(events);
  } catch {
    res.status(500).json({ message: "Failed to fetch events" });
  }
});

/* ================= ADD EVENT ================= */
router.post("/", protect, async (req, res) => {
  try {
    const { title, type, date } = req.body;

    const event = await CalendarEvent.create({
      title,
      type,
      date,
      facultyId: req.user.id,
    });

    res.status(201).json(event);
  } catch {
    res.status(500).json({ message: "Failed to add event" });
  }
});

/* ================= DELETE EVENT (OPTIONAL) ================= */
router.delete("/:id", protect, async (req, res) => {
  try {
    await CalendarEvent.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted" });
  } catch {
    res.status(500).json({ message: "Failed to delete event" });
  }
});

export default router;
