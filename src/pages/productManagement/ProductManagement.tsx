import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/redux/features/product";
import { TProduct } from "@/types";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

const ProductManagement = () => {
  const { data } = useGetProductsQuery(undefined);
  const allProducts = data?.data;
  const [deleteProduct, { data: resDeleteData }] = useDeleteProductMutation();
  //   console.log("delete-res", resDeleteData);
  const handleProductDelete = async (id: string) => {
    try {
      await deleteProduct({ id });
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <div className="section-gap">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-semibold">Manage products!</h2>
        <button className="py-2 px-4 bg-primaryColor text-white font-semibold rounded-md hover:bg-secondaryColor">
          Create a product
        </button>
      </div>
      <table className="table-fixed w-full border-collapse border border-gray-200 mt-4">
        <thead>
          <tr>
            <th className="border border-gray-200 px-4 py-2">No.</th>
            <th className="border border-gray-200 px-4 py-2">Name</th>
            <th className="border border-gray-200 px-4 py-2">Price</th>
            <th className="border border-gray-200 px-4 py-2">Category</th>
            <th className="border border-gray-200 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allProducts?.map((item: TProduct, index: number) => {
            const id = item?._id;
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
                <td>{item?.category}</td>
                <td className="border-l px-4 py-2 flex items-center gap-x-4 justify-center">
                  <button
                    onClick={() => handleProductDelete(id)}
                    title="delete product"
                    className="p-2 "
                  >
                    <FaRegTrashAlt className="text-lg text-red-600" />
                  </button>
                  <button title="edit product" className="p-2 ">
                    <FaRegEdit className="text-xl text-primaryColor" />
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

export default ProductManagement;
