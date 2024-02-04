import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import App from "../App";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";
export default function HomePage() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
