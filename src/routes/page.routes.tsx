import About from "@/pages/about/About";
import Cart from "@/pages/cart/Cart";
import Details from "@/pages/details/Details";
import Home from "@/pages/home/Home";
import Products from "@/pages/products/Products";

export const pageRoutes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "products",
        element: <Products />,
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
        element: <Cart />,
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
