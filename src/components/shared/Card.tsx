import { TProduct } from "@/types";
import { FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface CardProps {
  product: TProduct[];
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {product?.map((singleProduct) => {
        return (
          <div className="group space-y-2 " key={singleProduct?._id}>
            <div className="overflow-hidden">
              <img
                src={singleProduct?.images[0]}
                className="h-[300px] w-[300px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                alt=""
              />
            </div>
            <p className="text-lg font-semibold">{singleProduct?.name}</p>
            <p className="font-semibold flex items-center">
              Price: {singleProduct?.price} <FaDollarSign />
            </p>
            <div className="pt-2">
              <Link
                to={`/product-details/${singleProduct?._id}`}
                className="bg-transparent text-secondaryColor border-2 border-primaryColor hover:text-white hover:bg-secondaryColor hover:border-secondaryColor py-1 px-3 rounded font-medium"
              >
                View Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
