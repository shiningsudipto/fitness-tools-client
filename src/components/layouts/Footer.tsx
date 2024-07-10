import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";

// import logo from "FT.png";
import { Link } from "react-router-dom";

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

const Footer = () => {
  return (
    <div className="">
      <div className="flex justify-between p-[60px] bg-slate-50">
        <div className="flex gap-x-5">
          <img src="FT.png" alt="" className="h-[150px] w-auto" />
          <div className="space-y-2">
            <p className="text-3xl font-bold leading-0 -mt-2">
              <span className="text-secondaryColor">Fitness</span>{" "}
              <span className="text-primaryColor">Tools</span>
            </p>
            <p className="flex items-center gap-3">
              <FaLocationDot className="text-secondaryColor" /> Barishal,
              Bangladesh
            </p>
            <p className="flex items-center gap-3">
              <MdEmail className="text-secondaryColor" /> fitnesstools@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaSquarePhone className="text-secondaryColor" /> +880 171 1111111
            </p>
          </div>
        </div>
        <div className="">
          <p className="font-semibold mb-2">Important links</p>
          <div className="flex flex-col gap-y-2">
            {links?.map((menu, idx) => (
              <Link key={idx} to={menu?.path}>
                {menu?.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 font-semibold">Follow us on</p>
          <div className="flex gap-x-4 items-center text-secondaryColor">
            <p>
              <FaFacebookSquare className="text-2xl hover:text-primaryColor" />{" "}
            </p>
            <p>
              <FaInstagramSquare className="text-2xl hover:text-primaryColor" />{" "}
            </p>
            <p>
              <IoLogoYoutube className="text-2xl hover:text-primaryColor" />{" "}
            </p>
            <p>
              <FaTwitterSquare className="text-2xl hover:text-primaryColor" />{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-secondaryColor text-white text-center py-5">
        design and development by @ fitness tools
      </div>
    </div>
  );
};

export default Footer;
