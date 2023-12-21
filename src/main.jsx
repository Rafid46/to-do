import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Components/Pages/MainLayout";
import Home from "./Components/Pages/Home";
import Register from "./Components/Users/Register";
import AuthProvider from "./Components/Provider/AuthProvider";
import Login from "./Components/Users/Login";
import Dashboard from "./Components/Pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "register", element: <Register></Register> },
      { path: "login", element: <Login></Login> },
      { path: "dashboard", element: <Dashboard></Dashboard> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="font-poppins">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
