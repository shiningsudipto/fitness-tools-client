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
  // Calculate total quantity and total price
  const calculateTotals = () => {
    let totalPrice = 0;
    let totalQuantity = 0;

    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });

    return { totalQuantity, totalPrice };
  };

  const { totalQuantity, totalPrice } = calculateTotals();
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
              <tr key={index} className="text-center border-b">
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
                    <FaRegTrashAlt className="text-lg text-red-600" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-8 flex flex-col items-end justify-end">
        <table className="w-1/2">
          <p className="text-2xl font-semibold text-start mb-5">
            Pricing table:
          </p>
          <tbody>
            <tr>
              <td className="border py-3 px-5">No. of products:</td>
              <td className="border py-3 px-5">{cart.length}</td>
            </tr>
            <tr>
              <td className="border py-3 px-5">Total quantity:</td>
              <td className="border py-3 px-5">{totalQuantity}</td>
            </tr>
            <tr className="font-semibold">
              <td className="border py-3 px-5">Total price:</td>
              <td className="border py-3 px-5">{totalPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
