import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IoMenu } from "react-icons/io5";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Navbar = () => {
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
    {
      path: "/cart",
      name: "Cart",
    },
    {
      path: "/about-us",
      name: "About",
    },
  ];
  return (
    <div className="h-[50px] flex justify-between px-[60px] py-2">
      <div className="flex gap-x-2 items-baseline">
        <img src="FT.png" alt="" className="h-[30px]" />
        <p className="text-xl font-bold">
          <span className="text-secondaryColor">Fitness</span>{" "}
          <span className="text-primaryColor">Tools</span>
        </p>
      </div>
      <div className="md:flex items-center gap-x-3 font-medium hidden">
        {links?.map((menu, idx) => (
          <Link key={idx} to={menu?.path}>
            {menu?.name}
          </Link>
        ))}
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
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
