require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const connectDB = require("../config/db");
const Admin = require("../models/Admin");

const seedAdmin = async () => {
  try {
    // Connect Database
    await connectDB();

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({
      email: "admin@renewcred.com",
    });

    if (existingAdmin) {
      console.log("✅ Admin already exists");
      process.exit();
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash("admin123", 10);

    // Create Admin
    await Admin.create({
      username: "admin",
      email: "admin@renewcred.com",
      password: hashedPassword,
    });

    console.log("✅ Admin Created Successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();