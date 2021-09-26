import { User, Book, Home, Auth, Client } from "pages";
import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: lazy(() => Client),
    exact: true,
  },
  {
    path: "/login",
    component: lazy(() => Auth),
  },
  {
    path: "/admin",
    component: lazy(() => Home),
  },

  {
    path: "/admin/account",
    component: lazy(() => User),
  },
  {
    path: "/admin/book",
    component: lazy(() => Book),
  },
];
export default routes;
