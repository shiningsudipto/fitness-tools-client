import { Outlet } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { useAppSelector } from "./redux/hooks";
import useBeforeUnload from "./hooks/useBeforeUnload";

const App = () => {
  const cart = useAppSelector((state) => state.cart);
  const shouldWarn = cart.length > 0;

  useBeforeUnload(
    shouldWarn,
    "You have items in your cart. Are you sure you want to leave without checking out?"
  );

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
