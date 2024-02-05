const mongoose = require("mongoose")

// Mongoose schema for user
const userSchema = new mongoose.Schema({
  username: { type: String },
  password: String,
  name: String,
  purchasedCourses: [{ type: "ObjectId", ref: "Course" }],
});

// Mongoose schema for admin
const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
});

// Mongoose schema for course
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

// Define Mongoose model
const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Course = mongoose.model("Course", courseSchema);


module.exports = {
    User,
    Admin,
    Course
}