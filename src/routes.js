import { User, Book, Admin, Auth, Client } from "pages";

const routes = [
  {
    path: "/",
    component: () => <Client />,
    exact: true,
  },
  {
    path: "/login",
    component: () => <Auth />,

    exact: false,
  },
  {
    path: "/admin",
    component: () => <Admin />,
    exact: true,
  },

  {
    path: "/admin/account",
    component: () => <User />,
    exact: false,
  },
  {
    path: "/admin/book",
    component: () => <Book />,
    exact: false,
  },
];
export default routes;
