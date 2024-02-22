import { createBrowserRouter } from "react-router-dom";
import Layout from "../../pages/layout.page.tsx";
import { Home } from "../../pages/home.page.tsx";
import { UserPage } from "../../pages/user.page.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "about",
    element: <Home />,
  },
  {
    path: "user",
    element: <UserPage />,
  },
]);
