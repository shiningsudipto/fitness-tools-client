import { TProduct } from "@/types";
import { FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import npImg from "../../assets/images/np.png";

interface CardProps {
  product: TProduct[];
  rowItem: number;
}

const Card: React.FC<CardProps> = ({ product, rowItem }) => {
  return (
    <>
      {product?.length === 0 ? (
        <div className="flex flex-col items-center justify-center w-full">
          <img src={npImg} alt="" className="h-[200px]" />
          <p className="font-bold text-xl text-secondaryColor mt-2">
            Sorry, no products found!
          </p>
        </div>
      ) : (
        <div className={`grid lg:grid-cols-${rowItem} grid-cols-1 gap-5`}>
          {product?.map((singleProduct) => {
            return (
              <div
                className="group space-y-2 bg-slate-50 h-[440px] p-3 rounded-md"
                key={singleProduct?._id}
              >
                <div className="overflow-hidden">
                  <img
                    src={singleProduct?.images}
                    className="lg:h-[300px] lg:w-[300px] w-full h-[300px] object-cover transform transition-transform duration-300 group-hover:scale-105 rounded-md"
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
      )}
    </>
  );
};

export default Card;
