import Dropdown from "@/components/formik/Dropdown";
import Input from "@/components/formik/Input";
import Textarea from "@/components/formik/Textarea";
import Modal from "@/components/shared/Modal";
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/redux/features/product";
import { TProduct, TProductFormValues } from "@/types";
import { categoryOptions } from "@/utils/options";
import { Form, Formik } from "formik";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import EditProduct from "./components/EditProduct";

const initialValues: TProductFormValues = {
  name: "",
  category: "",
  price: 120,
  description: "",
  images: "",
  stock: 20,
};

const ProductManagement = () => {
  const { data } = useGetProductsQuery({});
  const allProducts = data?.data;
  const [deleteProduct] = useDeleteProductMutation();
  //   console.log("delete-res", resDeleteData);

  const [
    productData,
    { data: resCreateProductData, error: resCreateProductError },
  ] = useCreateProductMutation();
  console.log(
    "res-create-product:",
    resCreateProductData,
    resCreateProductError
  );

  const handleProductDelete = async (id: string) => {
    try {
      await deleteProduct({ id });
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleSubmit = async (values: TProductFormValues) => {
    // console.log(values);
    try {
      await productData(values);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="section-gap">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-semibold">Manage products!</h2>
        <Modal
          label={"Create a product"}
          title={"Create a product"}
          btnStyle="primary-btn"
        >
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ setFieldValue }) => (
              <Form className="space-y-4">
                <Input
                  name="name"
                  label="Product name"
                  placeholder="your product name here"
                />
                <Input
                  name="price"
                  type="number"
                  label="Price"
                  placeholder="product price"
                />
                <Textarea
                  name="description"
                  label="Description"
                  placeholder="write your product description here"
                />
                <Input
                  name="images"
                  label="Image link"
                  placeholder="your product image link here"
                />
                <Dropdown
                  setFieldValue={setFieldValue}
                  name="category"
                  label="Category"
                  placeholder="select category"
                  options={categoryOptions}
                />
                <Input
                  name="stock"
                  type="number"
                  label="Stock"
                  placeholder="product stock"
                />
                <button type="submit" className="primary-btn w-full">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </Modal>
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
                  <Modal
                    label={
                      <>
                        <FaRegEdit className="text-xl text-primaryColor" />
                      </>
                    }
                    title={"Edit product"}
                  >
                    <EditProduct item={item} />
                  </Modal>
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
