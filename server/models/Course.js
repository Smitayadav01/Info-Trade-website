import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Course title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Course description is required"],
    },
    duration: {
      type: String,
      required: [true, "Course duration is required"],
    },
    price: {
      type: Number,
      required: [true, "Course price is required"],
      min: 0,
    },
    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },
    category: {
      type: String,
      required: [true, "Course category is required"],
    },
    syllabus: [
      {
        topic: String,
        content: String,
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
    enrolledCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Course", courseSchema);
