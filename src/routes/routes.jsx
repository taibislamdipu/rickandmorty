import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About";
import Cast from "../pages/Cast/Cast";
import CastDetails from "../pages/CastDetails/CastDetails";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";
import NotFoundPage from "../pages/NotFoundPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/cast",
    element: <Cast />,
  },
  {
    path: "/cast-details/:id",
    element: <CastDetails />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default routes;
