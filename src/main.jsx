import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import App from './App.jsx'
import './index.css'
import LoginPage from './components/LoginPage.jsx'
import SignupPage from './components/SignupPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />
      }
    ]

  },
  {
    path: "/signup", 
    element: <SignupPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
