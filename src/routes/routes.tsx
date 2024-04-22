import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";
import DashBoard from "../components/DashBoard";

const routeElements = [
  <Route path="/" element={<Home />} />,
  <Route path="/login" element={<Login />} />,
  <Route
    path="/dashboard"
    element={
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    }
  />,
];

// Create routes from elements
export const router = createBrowserRouter(
  createRoutesFromElements(routeElements)
);
