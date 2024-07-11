import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useAppDispatch();
  return (
    <div className="section-gap">
      <h2 className="text-2xl font-semibold">Your Cart</h2>
      <table className="table-fixed w-full border-collapse border border-gray-200 mt-4">
        <thead>
          <tr>
            <th className="border border-gray-200 px-4 py-2">No.</th>
            <th className="border border-gray-200 px-4 py-2">Name</th>
            <th className="border border-gray-200 px-4 py-2">Price</th>
            <th className="border border-gray-200 px-4 py-2">Quantity</th>
            <th className="border border-gray-200 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map((item, index) => {
            const id = item?.id;
            return (
              <tr key={index} className="text-center">
                <td className="border border-gray-200 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {item?.name}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {item?.price}
                </td>
                <td className="h-[52px] flex items-center justify-center gap-x-3">
                  <button onClick={() => dispatch(decreaseQuantity({ id }))}>
                    <FiMinusCircle className="text-lg text-secondaryColor" />{" "}
                  </button>{" "}
                  {item?.quantity}
                  <button onClick={() => dispatch(increaseQuantity({ id }))}>
                    <FiPlusCircle className="text-lg text-secondaryColor" />{" "}
                  </button>
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  <button
                    onClick={() => dispatch(removeFromCart({ id }))}
                    className="p-2 "
                  >
                    <FaRegTrashAlt className="text-lg text-primaryColor" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
