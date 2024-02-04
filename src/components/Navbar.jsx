import { Typography} from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { Link } from 'react-router-dom'
export default function Navbar() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  // render useremail  if the user is logged in
  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setLoggedInUser(data.username));
  },[])

  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        background: "#000000",
      }}
    >
      <Typography
        sx={{ textDecoration: "none" }}
        component={Link}
        to="/"
        color={"whitesmoke"}
        variant="h5"
        fontWeight={"bold"}
      >
        Course Selling App
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {loggedInUser ? (
          <div style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
            <Typography color={"whitesmoke"} marginTop={1} marginRight={1} fontWeight={"bold"}>{loggedInUser}</Typography>
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                localStorage.removeItem("token");
                window.location = "/";
              }}
            >
              Logout
            </Button>
          </div>
        ) : (
          <>
            <Button
              sx={{ marginRight: "5px" }}
              component={Link}
              to="/login"
              variant="contained"
            >
              Login
            </Button>

            <Button
              sx={{ marginRight: "7px" }}
              component={Link}
              to="/signup"
              variant="contained"
            >
              Signup
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
