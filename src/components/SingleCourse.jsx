import { Card, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import Navbar from "./Navbar";
import EditCourse from "./EditCourse.jsx";

export default function SingleCourse() {
  const { courseId } = useParams();
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3000/admin/course/${courseId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCourse(data);
      });
  }, [courseId]);

  if (course.length === 0) {
    return <h3>Loading ...</h3>;
  }
  return (
    <div>
      <Navbar />

      <div
        style={{
          backgroundColor: "darkslategray",
          width: "100%",
          padding: "70px 0px 70px 0px",
          zIndex: 0,
          position: 'relative'
        }}
      >
        <Typography
          variant="h5"
          color={"whitesmoke"}
          fontWeight={"bold"}
          style={{ textAlign: "center" }}
        >
          {course.title}
        </Typography>
      </div>

      <Grid container spacing={2} justifyContent={"center"} >
        <Grid item lg={4} md={6} sm={12} style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
          top: "-40px",
        }}>
          <EditCourse course={course} setCourse={setCourse} />
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card
            key={course._id}
            variant="outlined"
            style={{
              height: "400px",
              paddingTop: "-150px",
              zIndex: 1,
              position: "relative",
              top: "-50px"
            }}
          >
            <img src={course.imageLink} alt="" style={{ width: "300px" }} />
            <div style={{
              padding: "10px"
            }}>

            <Typography
              variant="subtitle1"
              fontWeight={"bold"}
              style={{ textAlign: "center" }}
              paddingBottom={2}
            >
              {course.title}
            </Typography>
            <Typography variant="subtitle2">{course.description}</Typography>
            <Typography fontWeight={"bold"} color="black">
              Price: {course.price}
            </Typography>
            <Typography color="black">
              Published: {course.published ? "Yes" : "No"}
            </Typography>
            </div>

          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
