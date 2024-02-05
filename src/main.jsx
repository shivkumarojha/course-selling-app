import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import App from './App.jsx'
import './index.css'
import LoginPage from './components/LoginPage.jsx'
import SignupPage from './components/SignupPage.jsx'
import AddCourse from './components/AddCourse.jsx'
import ShowAllCourses from './components/ShowAllCourses.jsx'
import SingleCourse from './components/SingleCourse.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup", 
    element: <SignupPage />
  },
  {
    path: "/admin/addcourse",
    element: <AddCourse />
  },
  {
    path: "/admin/courses",
    element: <ShowAllCourses />
  },
  {
    path: "/admin/course/:courseId",
    element: <SingleCourse />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
