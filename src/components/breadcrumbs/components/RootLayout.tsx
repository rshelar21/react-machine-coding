import { Outlet } from "react-router-dom";
import { Breadcrumbs } from "./Breadcrumbs";

export function RootLayout() {
  return (
    <div>
      <Breadcrumbs />
      <Outlet />
    </div>
  );
}
