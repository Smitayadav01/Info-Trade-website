import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "./models/User.js";
import dotenv from "dotenv";

dotenv.config();

const ADMIN_EMAIL = "teztraders@gmail.com";

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const existingAdmin = await User.findOne({ email: ADMIN_EMAIL });

    if (existingAdmin) {
      console.log("⚠️ Admin already exists. Delete it first if you want to reseed.");
      process.exit();
    }

    
await User.create({
  name: "Admin",
  email: "teztraders@gmail.com",
  password: "Admin@123", // ✅ plain password
  role: "admin",
});


    console.log("✅ Admin created successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Error creating admin:", error);
    process.exit(1);
  }
};

createAdmin();
