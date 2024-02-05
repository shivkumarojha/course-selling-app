const express = require("express");
const app = express();
const cors = require("cors");
const { v4: uuid4 } = require("uuid");
const mongoose = require("mongoose");
const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')
const { User, Admin, Course} = require('./db/db')

// Middleware for extracting json payloads from incoming requests
app.use(express.json());

// For cors
app.use(cors());

// Routes for admin and user
app.use('/admin', adminRouter)
app.use('/user', userRouter)

// Connect to mongodb database locally
mongoose.connect("mongodb://localhost:27017/courses");

// Start the server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});


