import type { ISideBar } from "@/types";
import { lazy } from "react";
const Booking = lazy(() => import("@/pages/user/Booking"));

export const userSideBar: ISideBar[] = [
  {
    title: "User",
    items: [
      {
        title: "Booking",
        url: "/user/booking",
        component: Booking,
      },
    ],
  },
];
