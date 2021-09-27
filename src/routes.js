import { User, Book } from "pages";

const routes = [
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
