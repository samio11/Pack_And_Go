import type { ISideBar } from "@/types";

export const generateRoutes = (SideBar: ISideBar[]) => {
  return SideBar?.flatMap((section) =>
    section?.items?.map((x) => ({
      path: x.url,
      Component: x.component,
    }))
  );
};
