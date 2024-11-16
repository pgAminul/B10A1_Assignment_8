// Router.jsx
import { createBrowserRouter } from "react-router-dom";
import StaticPage from "../Pages/Static";
import Home from "../Pages/Home";
import Statistics from "../Layout/Statistics";
import DeshBoard from "../Layout/Deshboard";
import Gadegest from "../Layout/Gadegest";
import ProductDetails from "../Layout/productDetails";
import ErrorPage from "../Pages/Error";
import About from "../Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StaticPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categoryData.json"),
        children: [
          {
            path: "/",
            element: <Gadegest />,
            loader: () => fetch("../mainData.json"),
          },
          {
            path: "/category/:category",
            element: <Gadegest />,
            loader: () => fetch("../mainData.json"),
          },
        ],
      },
      {
        path: "/productDetails/:details",
        element: <ProductDetails />,
        loader: () => fetch("../mainData.json"),
      },
      {
        path: "/grapPage",
        element: <Statistics />,
        loader: () => fetch("mainData.json"),
      },
      {
        path: "/deshboard",
        element: <DeshBoard />,
        loader: () => fetch("mainData.json"),
      },
      {
        path: "/shoppingAbout",
        element: <About />,
      },
    ],
  },
]);

export default router;
