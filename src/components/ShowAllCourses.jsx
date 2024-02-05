import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Button, Card } from "@mui/material";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function ShowAllCourses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/admin/allcourses", {
      method: "GET",
      headers: {
        "Content-Type": "application-json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCourses(data);
      })
      .then(console.log(courses));
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "10px",
          padding: "20px",
        }}
      >
        {courses.map((course) => {
          return (
            <Card
              style={{
                width: "300px",
                height: "300px",
                padding: "20px",
              }}
              variant="outlined"
            >
              <Typography variant="subtitle1" textAlign={"center"}>
                {course.title}
              </Typography>
              <Typography variant="subtitle2" textAlign={"center"}>
                {course.description}
              </Typography>
              <img
                src={
                  course.imageLink
                    ? course.imageLink
                    : "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                }
                textAlign={"center"}
                width={"300px"}
              />
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => navigate(`/admin/course/${course._id}`)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "red", marginLeft: "20px" }}
                  onClick={() => {
                    navigate(`/admin/course/${course._id}`);
                  }}
                >
                  Delete
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
