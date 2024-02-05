import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import Navbar from "./Navbar";
import EditCourse from './EditCourse.jsx'


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
        console.log(data);
        setCourse(data);
      });
  }, [courseId]);

  useEffect(() => {
    console.log(course);
  }, [course]);
  if (course.length === 0) {
    return <h3>Loading ...</h3>;
  }
  return (

    <div>
        <Navbar />
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            paddingTop: "100px"

        }}>
          <Card key={course._id} variant="outlined" style={{
            padding: "30px"
          }}>
            <Typography variant="subtitle1" fontWeight={"bold"}>{course.title}</Typography>
            <Typography variant="subtitle2">{course.description}</Typography>
            <Typography fontWeight={"bold"} color="black">Price: {course.price}</Typography>
            <img src={course.imageLink} alt="" style={{width: "300px"}} />
          </Card>
        <EditCourse course={course}/>
        </div>
    </div>
  )

}
