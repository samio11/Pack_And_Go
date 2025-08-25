import { Role } from "@/constants";
import { adminSideBar } from "@/router/adminSIdebar";
import { userSideBar } from "@/router/userSidebar";
import type { TRole } from "@/types";

export const generateSidebar = (userRole: TRole) => {
  switch (userRole) {
    case Role.super_admin:
      return [...adminSideBar];
    case Role.admin:
      return [...adminSideBar];
    case Role.user:
      return [...userSideBar];
    default:
      return [];
  }
};
