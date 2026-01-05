import PMSImage from "../models/PMSImage.js";

export const getAllPMSImages = async (req, res) => {
  try {
    const images = await PMSImage.find({ isActive: true })
      .populate("uploadedBy", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: images.length,
      data: images,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error fetching PMS images",
    });
  }
};

export const getPMSImageById = async (req, res) => {
  try {
    const image = await PMSImage.findById(req.params.id).populate(
      "uploadedBy",
      "name email"
    );

    if (!image) {
      return res.status(404).json({
        success: false,
        message: "PMS image not found",
      });
    }

    res.status(200).json({
      success: true,
      data: image,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error fetching PMS image",
    });
  }
};

export const createPMSImage = async (req, res) => {
  try {
    const image = await PMSImage.create({
      ...req.body,
      uploadedBy: req.user._id,
    });

    const populatedImage = await PMSImage.findById(image._id).populate(
      "uploadedBy",
      "name email"
    );

    res.status(201).json({
      success: true,
      message: "PMS image created successfully",
      data: populatedImage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error creating PMS image",
    });
  }
};

export const updatePMSImage = async (req, res) => {
  try {
    const image = await PMSImage.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate("uploadedBy", "name email");

    if (!image) {
      return res.status(404).json({
        success: false,
        message: "PMS image not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "PMS image updated successfully",
      data: image,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error updating PMS image",
    });
  }
};

export const deletePMSImage = async (req, res) => {
  try {
    const image = await PMSImage.findByIdAndDelete(req.params.id);

    if (!image) {
      return res.status(404).json({
        success: false,
        message: "PMS image not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "PMS image deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error deleting PMS image",
    });
  }
};
