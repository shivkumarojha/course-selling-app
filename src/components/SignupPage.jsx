import { Typography, Button } from "@mui/material";
import { Card } from "@mui/material";
import { TextField } from "@mui/material";
import Navbar from "./Navbar";
function SignupPage() {
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
            ></TextField>
            <TextField variant="standard" label="Name"></TextField>
            <TextField
              variant="standard"
              type="password"
              label="Password"
            ></TextField>
            <TextField
              variant="standard"
              type="password"
              label="Confirm Password"
            ></TextField>
            <Button
              sx={{
                marginTop: "10px",
              }}
              variant="contained"
            >
              Login
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}
export default SignupPage;
