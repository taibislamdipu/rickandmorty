import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/home/Home";
import NotFoundPage from "../pages/NotFoundPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default routes;
