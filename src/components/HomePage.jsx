import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import App from "../App";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import ShowAllCourses from "./ShowAllCourses";
export default function HomePage() {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then(data => {
        if(data.username) {
          setIsAdmin(true)
        }else{
          setIsAdmin(false)
        }})
  }, []);

  return (
    <div>
      <Navbar />
      {isAdmin && <ShowAllCourses />}
      {!isAdmin && <LoginPage />}
    </div>
  );
}
