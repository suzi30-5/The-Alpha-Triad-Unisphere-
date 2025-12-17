import mongoose from "mongoose";

const calendarEventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["assignment", "exam", "meeting"],
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    facultyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("CalendarEvent", calendarEventSchema);
