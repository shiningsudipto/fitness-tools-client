import { Link } from "react-router-dom";
import psImg from "../assets/images/ps1.png";
const Success = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-4 my-[60px]">
        <h3 className="text-4xl font-bold text-primaryColor">
          Payment Successful
        </h3>
        <Link
          to={"/products"}
          className="font-semibold text-xl text-secondaryColor"
        >
          Brows more products!
        </Link>
        <Link to={"/products"} className="">
          <img src={psImg} alt="" className="h-[200px]" />
        </Link>
      </div>
    </div>
  );
};

export default Success;
