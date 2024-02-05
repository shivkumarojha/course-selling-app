const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router()



// Middleware for User authentication
const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, secretForUser, (err, user) => {
      if (err) {
        res.status(403).json({ message: "Unauthorized" });
      } else {
        res.user = user;
        next();
      }
    });
  }
};

// User routes
router.post("/signup", (req, res) => {});

router.post("/login", (req, res) => {
  // logic to log in user
});

router.get("/courses", (req, res) => {
  // logic to list all courses
});

router.post("/courses/:courseId", (req, res) => {
  // logic to purchase a course
});

router.get("/purchasedCourses", (req, res) => {
  // logic to view purchased courses
});

module.exports = router