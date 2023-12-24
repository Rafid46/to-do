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
import PrivateRoute from "./Components/Routes/PrivateRoute";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ShowTasks from "./Components/Pages/ShowTasks";
import Heading from "./Components/Pages/Heading";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/register", element: <Register></Register> },
      { path: "/login", element: <Login></Login> },
      // { path: "showTask", element: <ShowTasks></ShowTasks> },
      // { path: "todo", element: <Heading></Heading> },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <DndProvider backend={HTML5Backend}>
    <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <div className="font-poppins">
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </AuthProvider>
    </React.StrictMode>
  </DndProvider>
);
