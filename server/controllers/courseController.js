import Course from "../models/Course.js";

/**
 * USER – Get all active courses
 */
export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({ isActive: true }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error fetching courses",
    });
  }
};

/**
 * USER – Get single active course
 */
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findOne({
      _id: req.params.id,
      isActive: true,
    });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error fetching course",
    });
  }
};
