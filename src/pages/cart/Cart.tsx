import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalV2 from "@/components/shared/ModalV2";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const [isProductDeleteModalOpen, setProductDeleteModalOpen] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState("");
  // console.log(cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="section-gap">
      <h2 className="text-2xl font-semibold ">Your Cart</h2>
      <div className="overflow-x-auto">
        <table className="table-fixed w-full border-collapse border border-gray-200 mt-4">
          <thead>
            <tr>
              <th className="border border-gray-200 px-4 py-2 w-[100px]">
                No.
              </th>
              <th className="border border-gray-200 px-4 py-2 w-[100px]">
                Name
              </th>
              <th className="border border-gray-200 px-4 py-2 w-[100px]">
                Price
              </th>
              <th className="border border-gray-200 px-4 py-2 w-[100px]">
                Quantity
              </th>
              <th className="border border-gray-200 px-4 py-2 w-[100px]">
                Actions
              </th>
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
                      onClick={() => {
                        setDeleteProductId(id);
                        setProductDeleteModalOpen(true);
                      }}
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
      </div>
      <div className="mt-8 flex flex-col lg:items-end lg:justify-end">
        <table className="lg:w-1/2 w-full">
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
              <td className="border py-3 px-5">{totalPrice.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <button
          disabled={cart?.length === 0}
          className="primary-btn mt-4"
          onClick={handleCheckout}
        >
          Proceed to checkout
        </button>
      </div>
      <ModalV2
        isOpen={isProductDeleteModalOpen}
        setIsOpen={setProductDeleteModalOpen}
      >
        <div className="flex flex-col justify-center items-center space-y-2">
          <p className="text-xl font-bold">Are you sure?</p>
          <p className="text-lg font-semibold">You want to delete it?</p>
          <div className="flex items-center gap-x-4 pt-3">
            <button
              onClick={() => setProductDeleteModalOpen(false)}
              className="bg-secondaryColor text-lg font-medium text-white py-1 px-3 rounded-md hover:bg-secondaryColor500"
            >
              Cancel
            </button>

            <button
              className="bg-primaryColor text-lg font-medium text-white py-1 px-3 rounded-md hover:bg-primaryColor500"
              onClick={() => {
                dispatch(removeFromCart({ id: deleteProductId }));
                setProductDeleteModalOpen(false);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </ModalV2>
    </div>
  );
};

export default Cart;
