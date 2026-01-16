import mongoose from "mongoose";

const faqSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { _id: false }
);

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    provider: { type: String },
    duration: { type: String },
    image: { type: String },
    description: { type: String },

    price: { type: Number, required: true },
    originalPrice: { type: Number },

    rating: { type: Number, default: 0 },
    students: { type: Number, default: 0 },
    enrolledCount: { type: Number, default: 0 },

    features: [{ type: String }],
    modules: [{ type: String }],
    faqs: [faqSchema],

    // ✅ Admin control
    isPublished: { type: Boolean, default: false } 
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
