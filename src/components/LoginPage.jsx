import { Typography, Button } from "@mui/material";
import {Card} from "@mui/material";
import { TextField } from "@mui/material";
function LoginPage() {
  return (
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
          ></TextField>
          <TextField
            sx={{ margin: "10px" }}
            variant="standard"
            label="Password"
            type="password"
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
  );
}
export default LoginPage;
