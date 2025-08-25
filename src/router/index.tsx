import App from "@/App";
import Dashboard from "@/components/layouts/DashboardLayout";
import { Role } from "@/constants";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Tour from "@/pages/Tour";
import ViewBooking from "@/pages/ViewBooking";
import type { TRole } from "@/types";
import { generateRoutes } from "@/utils/generateRoutes";
import { withAuth } from "@/utils/withAuth";
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSideBar } from "./adminSIdebar";
import Booking from "@/pages/user/Booking";
import { userSideBar } from "./userSidebar";

const TourDetails = lazy(() => import("@/pages/TourDetails"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "tour",
        Component: Tour,
      },
      { path: "tour/:id", Component: TourDetails },
      {
        path: "booking/:id",
        Component: withAuth(ViewBooking),
      },
    ],
  },
  {
    path: "/admin/analysis",
    Component: withAuth(Dashboard, Role.super_admin as TRole),
    children: [
      { index: true, element: <Navigate to={"/admin/analysis"}></Navigate> },
      ...generateRoutes(adminSideBar),
    ],
  },
  {
    path: "/user/booking",
    Component: withAuth(Booking, Role.user as TRole),
    children: [
      {
        index: true,
        element: <Navigate to={"/user/booking"}></Navigate>,
      },
      ...generateRoutes(userSideBar),
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/verify",
    Component: Register,
  },
]);
