import About from "@/pages/about/About";
import Details from "@/pages/details/Details";
import Home from "@/pages/home/Home";

export const pageRoutes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "products",
        element: <Home />,
      },
      {
        path: "product-management",
        element: <Home />,
      },
      {
        path: "product-details/:id",
        element: <Details />,
      },
      {
        path: "cart",
        element: <Home />,
      },
      {
        path: "checkout",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About />,
      },
    ],
  },
];
