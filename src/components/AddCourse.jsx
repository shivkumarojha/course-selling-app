import { Typography } from "@mui/material";
import { TextField, Button } from "@mui/material"
import { Card } from "@mui/material";
import Navbar from "./Navbar";
import '../index.css'
export default function AddCourse() {
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
        ></TextField>
        <TextField
          variant="standard"
          label="Description"
          className="input"
          style={{ marginBottom: "10px" }}
        ></TextField>
        <TextField
          variant="standard"
          label="Price"
          type="number"
          className="input"
          style={{ marginBottom: "10px" }}
        ></TextField>
        <TextField
          variant="standard"
          label="Image link"
          type="url"
          className="input"
          style={{ marginBottom: "10px" }}
        ></TextField>
        <TextField
          variant="standard"
          label="Published"
          type="checkbox"
          className="input"
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            paddingBottom: "10px",
          }}
        ></TextField>
        <Button variant="contained" color="warning">AddCourse</Button>
      </Card>
    </div>
  );
}
