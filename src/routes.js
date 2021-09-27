import { User, Book, Admin, Auth, Client } from "pages";
import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: Client,
    exact: true,
  },
  {
    path: "/login",
    component: lazy(() => Auth),
  },
  {
    path: "/admin",
    component: lazy(() => Admin),
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
