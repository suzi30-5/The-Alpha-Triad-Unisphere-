import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subject: { type: String, required: true },
    dueDate: { type: Date, required: true },
    submissions: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model("Assignment", assignmentSchema);
