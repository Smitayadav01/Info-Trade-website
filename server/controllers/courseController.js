import Course from "../models/Course.js";

/**
 * @desc    Get all PUBLISHED courses (FOR USERS)
 * @route   GET /api/courses
 * @access  Public
 */
export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({ isActive: true })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching courses",
      error: error.message,
    });
  }
};

/**
 * @desc    Get ALL courses (FOR ADMIN ONLY)
 * @route   GET /api/courses/admin/all
 * @access  Admin
 */
export const getAdminCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching admin courses",
      error: error.message,
    });
  }
};

/**
 * @desc    Get single course by ID
 * @route   GET /api/courses/:id
 * @access  Public (but only if published)
 */
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course || !course.isActive) {
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
      message: "Error fetching course",
      error: error.message,
    });
  }
};

/**
 * @desc    Create new course
 * @route   POST /api/courses
 * @access  Admin
 */
export const createCourse = async (req, res) => {
  try {
    // Ensure new course is NOT visible to users by default
    const course = await Course.create({
      ...req.body,
      isActive: false,   // IMPORTANT ✅
    });

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating course",
      error: error.message,
    });
  }
};

/**
 * @desc    Update course
 * @route   PUT /api/courses/:id
 * @access  Admin
 */
export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating course",
      error: error.message,
    });
  }
};

/**
 * @desc    Delete course
 * @route   DELETE /api/courses/:id
 * @access  Admin
 */
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting course",
      error: error.message,
    });
  }
};

// ✅ NEW: Admin can fetch ANY course (even inactive)
export const getAdminCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

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
      message: "Error fetching course",
      error: error.message,
    });
  }
};
