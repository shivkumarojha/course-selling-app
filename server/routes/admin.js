const express = require("express");
const jwt = require("jsonwebtoken");
const { Admin, User, Course } = require("../db/db");

const router = express.Router();

const {
  generateJwtTokenAdmin,
  secretForAdmin,
  secretForUser,
  generateJwtTokenUser,
} = require("../middleware/auth");




// Middleware for Authenticating Admin
const authenticateAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, secretForAdmin, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Unauthorized" });
      } else {
        req.user = user;
        next();
      }
    });
  }
};

// Admin routes
router.post("/signup", async (req, res) => {
  const { username, password, name } = req.body;
  const adminExist = await Admin.findOne({ username });
  if (adminExist) {
    return res.status(403).json({ message: "Admin already exists!" });
  } else {
    const newAdmin = new Admin({
      username,
      password,
      name,
    });
    newAdmin.save();
    const token = generateJwtTokenAdmin(username);
    res.status(200).json({
      message: "Admin created successfully",
      token: token,
    });
  }
});

// Admin login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const isAdminExist = await Admin.findOne({ username, password });
  if (isAdminExist) {
    const token = generateJwtTokenAdmin(username);
    res
      .status(200)
      .json({ message: "Admin logged in successfully", token: token });
  } else {
    res.status(403).json({ message: "Unauthorized" });
  }
});


// Get the username if the user is signed in or signup using there email
router.get("/me", authenticateAdmin, (req, res) => {
  if (req.user) {
    res.json({ username: req.user.username });
  }
});

// Add new Course
router.post("/courses", authenticateAdmin, async (req, res) => {
  const course = req.body;
  const courseId = uuid4();
  if (!course.title) {
    return res.status(401).json({ message: "Can't add courses without title" });
  }
  title = course.title;
  const courseExist = await Course.findOne({ title });
  if (courseExist) {
    return res.json({ message: "Course with same title exists" });
  } else {
    const newCourse = new Course({ ...course });
    newCourse.save();
    res.status(200).json({ message: "Course Added successfully" });
  }
});

// Update a course
router.put("/courses/:courseId", authenticateAdmin, async (req, res) => {
  const updatedCourse = req.body;
  const courseId = req.params.courseId;
  const course = await Course.findOne({ _id: courseId });
  if (course) {
    const updateCourse = await Course.findByIdAndUpdate(
      courseId,
      updatedCourse,
      { new: true }
    );
    return res.status(200).json({ message: "Course Updated successfull" });
  } else {
    res.status(404).send("Doesn't find any course with course id");
  }
});

// Get all Courses
router.get("/allcourses", authenticateAdmin, async (req, res) => {
  const courses = await Course.find();
  if (courses) {
    res.status(200).json(courses);
  } else {
    res.status(404).json({ message: "No courses Found" });
  }
});


// Get One Course
router.get("/course/:courseId", authenticateAdmin, async (req, res) => {
  const courseId = req.params.courseId;
  const course = await Course.findOne({ _id: courseId });
  if (course) {
    res.status(200).json(course);
  } else {
    res.status(404).json({ message: "Course Not found" });
  }
});

module.exports = router;
