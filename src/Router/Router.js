import { createBrowserRouter } from "react-router-dom";
import Attendance from "../pages/Attendance/Attendance";
import Signup from "../pages/Signup/Signup";
import Login from "./../pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/attendance",
    element: <Attendance />,
  },
]);
