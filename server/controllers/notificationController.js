import Notification from "../models/Notification.js";

export const getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ isActive: true })
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: notifications.length,
      data: notifications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error fetching notifications",
    });
  }
};

export const getNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id).populate(
      "createdBy",
      "name email"
    );

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: "Notification not found",
      });
    }

    res.status(200).json({
      success: true,
      data: notification,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error fetching notification",
    });
  }
};

export const createNotification = async (req, res) => {
  try {
    const notification = await Notification.create({
      ...req.body,
      createdBy: req.user._id,
    });

    const populatedNotification = await Notification.findById(
      notification._id
    ).populate("createdBy", "name email");

    res.status(201).json({
      success: true,
      message: "Notification created successfully",
      data: populatedNotification,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error creating notification",
    });
  }
};

export const updateNotification = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).populate("createdBy", "name email");

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: "Notification not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Notification updated successfully",
      data: notification,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error updating notification",
    });
  }
};

export const deleteNotification = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndDelete(req.params.id);

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: "Notification not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Notification deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error deleting notification",
    });
  }
};
