import { useGetSingleProductQuery } from "@/redux/features/product";
import { useParams } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { TProduct } from "@/types";

const Details = () => {
  const params = useParams();
  const productId = params?.id;
  const { data } = useGetSingleProductQuery(productId);
  const productDetails = data?.data;
  const dispatch = useAppDispatch();
  const handleAddToCart = (product: TProduct) => {
    console.log(product);
    dispatch(
      addToCart({
        id: product?._id,
        name: product?.name,
        price: product?.price,
        stock: product?.stock,
        quantity: 1,
      })
    );
  };
  return (
    <div className="section-gap flex justify-between">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-secondaryColor">
          {productDetails?.name}
        </h2>
        <p>{productDetails?.description}</p>
        <p>Category: {productDetails?.category}</p>
        <p>Stock: {productDetails?.stock}</p>
        <p className="flex items-center">
          Price:{" "}
          <span className="font-medium ms-1">{productDetails?.price}</span>
          <BsCurrencyDollar />
        </p>
        <button
          onClick={() => handleAddToCart(productDetails)}
          title="add to cart"
          className="flex items-center gap-2 font-medium hover:bg-secondaryColor bg-primaryColor text-white py-[8px] px-[24px] rounded"
        >
          Add to <FaCartPlus className="" />
        </button>
      </div>
      <div>
        <img src={productDetails?.images[0]} className="w-[500px]" alt="" />
      </div>
    </div>
  );
};

export default Details;
