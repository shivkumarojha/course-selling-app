import { useState } from "react";
import { Typography, Button } from "@mui/material";
import {Card} from "@mui/material";
import { TextField } from "@mui/material";
import { json } from "react-router-dom";
import Navbar from "./Navbar";
function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  return (
    <div>
      <div
        style={{
          paddingTop: "100px",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3">Welcome back!</Typography>
        <Typography variant="h5">Let's get you Signed in!</Typography>
        <Card
          variant="outlined"
          style={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            padding: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <TextField
              sx={{ margin: "10px" }}
              variant="standard"
              label="Email"
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
            <TextField
              sx={{ margin: "10px" }}
              variant="standard"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
            <Button
              sx={{
                marginTop: "10px",
              }}
              variant="contained"
              onClick={() => {
                const data = { username: email, password: password };
                fetch("http://localhost:3000/admin/login", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                })
                  .then((response) => {
                    return response.json();
                  })
                  .then((data) => {
                    const token = data.token;
                    localStorage.setItem("token", token);
                    window.location = "/";
                  });
              }}
            >
              Login
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
export default LoginPage;
