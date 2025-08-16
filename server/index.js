import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Temporary in-memory users (for demo only)
let users = [];

// ✅ Allowed frontend URL (from .env)
const allowedOrigins = [process.env.FRONTEND_URL];

// Middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = "The CORS policy does not allow access from this origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// Create transporter for sending emails
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// ✅ SIGNUP endpoint
app.post("/api/auth/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  // Check if email already exists
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(400).json({ success: false, message: "Email already registered" });
  }

  // Save user
  const newUser = { id: Date.now().toString(), name, email, password };
  users.push(newUser);

  res.json({
    success: true,
    message: "Signup successful!",
    user: { id: newUser.id, name: newUser.name, email: newUser.email },
  });
});

// ✅ LOGIN endpoint
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Check against in-memory users
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    return res.json({
      success: true,
      user: { id: user.id, name: user.name, email: user.email },
      token: "fake-jwt-token", // Replace with real JWT later
    });
  }

  res.status(401).json({
    success: false,
    message: "Invalid email or password",
  });
});

// ✅ Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, company, subject, message, inquiryType } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields",
      });
    }

    const transporter = createTransporter();

    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL || process.env.EMAIL_USER,
      subject: `New AlgoTrade Pro Contact: ${subject}`,
      html: `...same email template here...`,
    };

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject:
        "Thank you for contacting AlgoTrade Pro - We've received your message",
      html: `...same email template here...`,
    };

    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({
      success: true,
      message: "Message sent successfully! Check your email for confirmation.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
});

// ✅ Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "Server is running!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
