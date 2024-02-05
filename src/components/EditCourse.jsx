import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { TextField, Button, Checkbox } from "@mui/material";

import { Card } from "@mui/material";
import Navbar from "./Navbar";
import "../index.css";

export default function EditCourse({ course }) {
  const [title, setTitle] = useState(course.title);
  const [description, setDescription] = useState(course.description);
  const [price, setPrice] = useState(course.price);
  const [published, setPublished] = useState(course.published);
  const [imageLink, setImageLink] = useState(course.imageLink);

  return (
    <div>
      <Card
        variant="outlined"
        style={{
          display: "flex",
          padding: "40px",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" fontWeight={"bold"}>
          Add Course
        </Typography>
        <TextField
          variant="standard"
          label="Course Title"
          className="input"
          style={{ marginBottom: "10px" }}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></TextField>
        <TextField
          variant="standard"
          label="Description"
          className="input"
          style={{ marginBottom: "10px" }}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></TextField>
        <TextField
          variant="standard"
          label="Price"
          type="number"
          className="input"
          style={{ marginBottom: "10px" }}
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        ></TextField>
        <TextField
          variant="standard"
          label="Image link"
          type="url"
          className="input"
          style={{ marginBottom: "10px" }}
          onChange={(e) => setImageLink(e.target.value)}
          value={imageLink}
        ></TextField>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="caption" fontWeight={"bold"}>
            Published
          </Typography>
          <Checkbox
          checked={published}
            onChange={() => {
              setPublished(!published);
            }}
          ></Checkbox>
        </div>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            const data = { title, description, price, imageLink, published };
            const jwtToken = localStorage.getItem("token");
            fetch(`http://localhost:3000/admin/courses/${course._id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwtToken}`,
              },
              body: JSON.stringify(data),
            })
              .then((response) => {
                return response.json();
              })
              .then((data) => console.log(data));
          }}
        >
          Update course
        </Button>
      </Card>
    </div>
  );
}
