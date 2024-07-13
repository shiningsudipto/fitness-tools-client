import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IoMenu } from "react-icons/io5";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { useAppSelector } from "@/redux/hooks";

const Navbar = () => {
  const cart = useAppSelector((state) => state.cart);
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/products",
      name: "Products",
    },
    {
      path: "/product-management",
      name: "Product Management",
    },
    // {
    //   path: "/cart",
    //   name: "Cart",
    // },
    {
      path: "/about-us",
      name: "About",
    },
  ];
  return (
    <div className="h-[60px] flex justify-between items-center lg:px-[60px] px-5 py-2">
      <Link to={"/"} className="flex gap-x-2 items-center">
        <img src="FT.png" alt="" className="h-[42px]" />
        <p className="text-3xl font-bold">
          <span className="text-secondaryColor">Fitness</span>{" "}
          <span className="text-primaryColor">Tools</span>
        </p>
      </Link>
      <div className="md:flex items-center gap-x-3 font-medium hidden">
        {links?.map((menu, idx) => (
          <Link key={idx} to={menu?.path}>
            {menu?.name}
          </Link>
        ))}
        <Link to="/cart" className="flex items-center text-primaryColor">
          <FaCartPlus /> <span className="ms-1 -mt-2">{cart.length}</span>
        </Link>
      </div>
      <div className="md:hidden block">
        <Drawer direction="right">
          <DrawerTrigger>
            <IoMenu className="text-2xl" />{" "}
          </DrawerTrigger>
          <DrawerContent>
            <DrawerClose className="flex justify-end m-2">
              <AiOutlineCloseSquare className=" text-3xl p-1" />
            </DrawerClose>
            <div className="flex flex-col w-[200px] gap-y-3 font-medium px-4">
              {links?.map((menu, idx) => (
                <Link key={idx} to={menu?.path}>
                  {menu?.name}
                </Link>
              ))}
              <Link to="/cart" className="flex items-center text-primaryColor">
                Cart <FaCartPlus className="ms-1" />{" "}
                <span className="ms-1 -mt-2">{cart.length}</span>
              </Link>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
