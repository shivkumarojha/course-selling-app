import { Typography} from "@mui/material";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "10px",
      }}
    >
      <Typography variant="h5">Coursera</Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button sx={{marginRight: "5px"}}component={Link} to="/login" variant="contained">Login</Button>
          
        <Button component={Link} to="/signup" variant="contained">Signup</Button>
      </div>
    </div>
  );
}
