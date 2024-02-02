import { Typography} from "@mui/material";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        background: "#000000"
      }}
    >
      <Typography  sx={{ textDecoration: "none"}} component={Link} to="/" color={"whitesmoke"} variant="h5" fontWeight={"bold"} >Course Selling App</Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button sx={{marginRight: "5px"}}component={Link} to="/login" variant="contained">Login</Button>
          
        <Button sx={{ marginRight: "7px"}} component={Link} to="/signup" variant="contained">Signup</Button>
      </div>
    </div>
  );
}
