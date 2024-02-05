import { Typography, Button } from "@mui/material";
import { useState } from "react";
import { Card } from "@mui/material";
import { TextField } from "@mui/material";
import Navbar from "./Navbar";
import axios from "axios";

function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")

  return (
    <>
      <Navbar />
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
        <Typography variant="h5">Let's get you Signed up!</Typography>
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
              variant="standard"
              type="email"
              label="Email"
              onChange={e => setEmail(e.target.value)}
            ></TextField>
            <TextField 
              variant="standard" 
              label="Name"
              onChange={e => setName(e.target.value)}
              ></TextField>
            <TextField
              variant="standard"
              type="password"
              label="Password"
              onChange={e => setPassword(e.target.value)}
            ></TextField>
            <TextField
              variant="standard"
              type="password"
              label="Confirm Password"
              onChange={e => setConfirmPassword(e.target.value)}
            ></TextField>
            <Button
              sx={{
                marginTop: "10px",
              }}
              variant="contained"
              color="warning"
              onClick={async() => {
                if(password === confirmPassword) {
                  const data = {username: email, password, name}
                  // fetch("http://localhost:3000/admin/signup", {
                  //   method: 'POST',
                  //   headers: {
                  //     'Content-Type': 'application/json'
                  //   },
                  //   body: JSON.stringify(data)
                  // })
                  // .then(response => {return response.json()})
                  // .then(data => {
                  //   console.log(data)
                  //   localStorage.setItem('token', data.token)
                  //   window.location = "/"

                  // })
                  const response = await axios.post(
                    "http://localhost:3000/admin/signup", data
                  );
                  localStorage.setItem('token', response.data.token)
                  window.location = "/"
                }else {
                  alert("Password and confirm password are not same!!!")
                }
              }}
            >
              Signup
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}
export default SignupPage;
