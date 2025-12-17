import express from "express";
import Assignment from "../models/Assignment.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

/* ================= FETCH ================= */
router.get("/", protect, async (req, res) => {
  try {
    const assignments = await Assignment.find().sort({ createdAt: -1 });
    res.json(assignments);
  } catch {
    res.status(500).json({ message: "Fetch failed" });
  }
});

/* ================= CREATE ================= */
router.post("/", protect, async (req, res) => {
  try {
    const assignment = await Assignment.create(req.body);
    res.status(201).json(assignment);
  } catch {
    res.status(500).json({ message: "Create failed" });
  }
});

/* ================= UPDATE ================= */
router.put("/:id", protect, async (req, res) => {
  try {
    const updated = await Assignment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch {
    res.status(500).json({ message: "Update failed" });
  }
});

/* ================= DELETE ================= */
router.delete("/:id", protect, async (req, res) => {
  try {
    await Assignment.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch {
    res.status(500).json({ message: "Delete failed" });
  }
});

export default router;
