import About from "@/pages/about/About";
import Cart from "@/pages/cart/Cart";
import Checkout from "@/pages/checkout/Checkout";
import Details from "@/pages/details/Details";
import Home from "@/pages/home/Home";
import ProductManagement from "@/pages/productManagement/ProductManagement";
import Products from "@/pages/products/Products";
import Success from "@/pages/Success";

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
        element: <ProductManagement />,
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
        element: <Checkout />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "about-us",
        element: <About />,
      },
    ],
  },
];
