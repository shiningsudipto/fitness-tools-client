import About from "@/pages/about/About";
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
        path: "product-details",
        element: <Home />,
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
