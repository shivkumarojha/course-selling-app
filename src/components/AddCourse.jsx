import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { TextField, Button, Checkbox } from "@mui/material";

import { Card } from "@mui/material";
import Navbar from "./Navbar";
import "../index.css";
import axios from "axios";
export default function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [published, setPublished] = useState(false);
  const [imageLink, setImageLink] = useState("");

  return (
    <div>
      <Navbar />

      <Card
        variant="outlined"
        style={{
          marginTop: "100px",
          display: "flex",
          width: "40%",
          margin: "100px auto",
          padding: "40px",
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
        ></TextField>
        <TextField
          variant="standard"
          label="Description"
          className="input"
          style={{ marginBottom: "10px" }}
          onChange={(e) => setDescription(e.target.value)}
        ></TextField>
        <TextField
          variant="standard"
          label="Price"
          type="number"
          className="input"
          style={{ marginBottom: "10px" }}
          onChange={(e) => setPrice(e.target.value)}
        ></TextField>
        <TextField
          variant="standard"
          label="Image link"
          type="url"
          className="input"
          style={{ marginBottom: "10px" }}
          onChange={(e) => setImageLink(e.target.value)}
        ></TextField>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Typography variant="caption" fontWeight={"bold"}>Published</Typography>
          <Checkbox
              checked={published}
            onChange={(e) => {
              setPublished(e.target.checked)
            }}
          ></Checkbox>
        </div>

        <Button
          variant="contained"
          color="warning"
          onClick={async() => {
            const data = { title, description, price, imageLink, published };
            const token = localStorage.getItem("token");
            // fetch("http://localhost:3000/admin/courses", {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json",
            //     Authorization: `Bearer ${token}`,
            //   },
            //   body: JSON.stringify(data),
            // })
            //   .then((response) => {
            //     return response.json();
            //   })
            //   .then((data) => console.log(data));
            const response = await axios.post("http://localhost:3000/admin/courses", data, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
            console.log(response.data)
          }}
        >
          AddCourse
        </Button>
      </Card>
    </div>
  );
}
