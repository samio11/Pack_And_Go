import type { ISideBar } from "@/types";
import { lazy } from "react";
const Analysis = lazy(() => import("@/pages/admin/Analysis"));
const AddTour = lazy(() => import("@/pages/admin/AddTour"));
const AddDivision = lazy(() => import("@/pages/admin/AddDivision"));
const AddTourType = lazy(() => import("@/pages/admin/AddTourType"));

export const adminSideBar: ISideBar[] = [
  {
    title: "Admin",
    items: [
      {
        url: "/analysis",
        title: "Analysis",
        component: Analysis,
      },
    ],
  },
  {
    title: "Managment",
    items: [
      {
        url: "/add-tour",
        title: "Add Tour",
        component: AddTour,
      },
      {
        url: "/add-division",
        title: "Add Division",
        component: AddDivision,
      },
      {
        url: "/add-tour-type",
        title: "Add Tour Type",
        component: AddTourType,
      },
    ],
  },
];
