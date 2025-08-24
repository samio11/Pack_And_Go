import type { ComponentType } from "react";

export interface IResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T | T[] | null;
}

export interface ISideBar {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export type TRole = "SUPER_ADMIN" | "ADMIN" | "USER" | "GUIDE";
