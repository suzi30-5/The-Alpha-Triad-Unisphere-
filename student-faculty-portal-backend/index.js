import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import facultyAssignments from "./routes/facultyAssignments.js";
import facultyCalendar from "./routes/facultyCalendar.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* ROUTE */
app.use("/api/faculty/assignments", facultyAssignments);

app.use("/api/faculty/calendar", facultyCalendar);
/* DB */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(console.error);

app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);
