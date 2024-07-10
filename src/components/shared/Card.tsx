import { TProduct } from "@/types";
import { Button } from "../ui/button";
import { FaDollarSign } from "react-icons/fa6";

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
            <Button className="bg-transparent text-secondaryColor border-2 border-primaryColor hover:text-white hover:bg-secondaryColor hover:border-secondaryColor">
              View Details
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
