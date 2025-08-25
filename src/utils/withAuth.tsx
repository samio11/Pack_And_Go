import { useGetMyDataQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/types";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
  return function authWrapper() {
    const { data, isLoading } = useGetMyDataQuery(undefined);
    if (!isLoading && !data?.data?.email) {
      return <Navigate to={"/login"}></Navigate>;
    }
    if (!isLoading && requiredRole && requiredRole !== data?.data?.role) {
      return <Navigate to={"/login"}></Navigate>;
    }
    return <Component></Component>;
  };
};
