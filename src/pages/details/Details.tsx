import { useGetSingleProductQuery } from "@/redux/features/product";
import { useParams } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { TProduct } from "@/types";
import { toast } from "react-toastify";
import Loader from "@/components/shared/Loader";

const Details = () => {
  const params = useParams();
  const productId = params?.id;
  const { data, isLoading } = useGetSingleProductQuery(productId);
  const productDetails = data?.data;
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const cartItem = cart.find((item) => item.id === productId);
  const cartItemQuantity = cartItem?.quantity ?? 0;
  console.log("quantity", cartItemQuantity);

  const handleAddToCart = (product: TProduct) => {
    // console.log(product);
    toast.success("Product added into the cart");
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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="section-gap flex lg:flex-row flex-col justify-between gap-y-5">
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
          disabled={
            productDetails?.stock === 0 ||
            productDetails?.stock <= cartItemQuantity
          }
          onClick={() => handleAddToCart(productDetails)}
          title="add to cart"
          className="flex items-center gap-2 font-medium hover:bg-secondaryColor bg-primaryColor text-white py-[8px] px-[24px] rounded disabled:bg-slate-500"
        >
          Add to <FaCartPlus className="" />
        </button>
      </div>
      <div>
        <img
          src={productDetails?.images}
          className="lg:w-[500px] w-full rounded-md"
          alt=""
        />
      </div>
    </div>
  );
};

export default Details;
