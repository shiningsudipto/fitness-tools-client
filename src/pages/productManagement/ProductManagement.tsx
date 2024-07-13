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
import { DialogClose } from "@/components/ui/dialog";
import ModalV2 from "@/components/shared/ModalV2";
import { useState } from "react";
import { toast } from "react-toastify";
import Loader from "@/components/shared/Loader";

const initialValues: TProductFormValues = {
  name: "",
  category: "",
  price: 120,
  description: "",
  images: "",
  stock: 20,
};

const ProductManagement = () => {
  const { data, isLoading } = useGetProductsQuery({});
  const allProducts = data?.data;
  const [deleteProduct] = useDeleteProductMutation();
  //   console.log("delete-res", resDeleteData);

  const [isCreateProductModalOpen, setCreateProductModalOpen] = useState(false);
  const [isEditProductModalOpen, setEditProductModalOpen] = useState(false);
  const [editableItem, setEditableItem] = useState<TProduct>({
    _id: "",
    name: "",
    price: 0,
    description: "",
    images: "",
    category: "",
    stock: 0,
    createdAt: "",
    updatedAt: "",
    __v: 0,
  });
  const [productData] = useCreateProductMutation();
  // console.log(
  //   "res-create-product:",
  //   resCreateProductData,
  //   resCreateProductError
  // );

  const handleProductDelete = async (id: string) => {
    try {
      await deleteProduct({ id });
      toast.success("Product deleted successfully");
    } catch (error) {
      console.log("error:", error);
      toast.error("Failed to delete product");
    }
  };

  const handleSubmit = async (values: TProductFormValues) => {
    // console.log(values);
    const productCreateState = toast.loading("Product creating");
    try {
      await productData(values);
      setCreateProductModalOpen(false);
      toast.dismiss(productCreateState);
      toast.success("Product created successfully");
    } catch (error) {
      console.log("error:", error);
      toast.error("Failed to create product");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="section-gap">
        <div className="flex flex-wrap items-center justify-between mb-5">
          <h2 className="lg:text-2xl text-xl font-semibold">
            Manage products!
          </h2>
          <button
            className="primary-btn"
            onClick={() => setCreateProductModalOpen(true)}
          >
            Create a product
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table-fixed lg:w-full border-collapse border border-gray-200 mt-4 overflow-x-scroll max-w-[400px]">
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
                      <Modal
                        label={
                          <>
                            <button title="delete product" className="p-2 ">
                              <FaRegTrashAlt className="text-lg text-red-600" />
                            </button>
                          </>
                        }
                      >
                        <div className="flex flex-col justify-center items-center space-y-2">
                          <p className="text-xl font-bold">Are you sure?</p>
                          <p className="text-lg font-semibold">
                            You want to delete it?
                          </p>
                          <div className="flex items-center gap-x-4 pt-3">
                            <DialogClose asChild>
                              <button className="bg-secondaryColor text-lg font-medium text-white py-1 px-3 rounded-md hover:bg-secondaryColor500">
                                Cancel
                              </button>
                            </DialogClose>
                            <DialogClose asChild>
                              <button
                                className="bg-primaryColor text-lg font-medium text-white py-1 px-3 rounded-md hover:bg-primaryColor500"
                                onClick={() => handleProductDelete(id)}
                              >
                                Delete
                              </button>
                            </DialogClose>
                          </div>
                        </div>
                      </Modal>
                      <FaRegEdit
                        onClick={() => {
                          setEditableItem(item);
                          setEditProductModalOpen(true);
                        }}
                        className="text-xl text-primaryColor"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <EditProduct
        isOpen={isEditProductModalOpen}
        setIsOpen={setEditProductModalOpen}
        item={editableItem}
      />
      <ModalV2
        isOpen={isCreateProductModalOpen}
        setIsOpen={setCreateProductModalOpen}
        title={"Create a product"}
        panelStyle="mt-[150px]"
      >
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ setFieldValue }) => (
            <Form className="space-y-4">
              <Input
                name="name"
                label="Product name"
                placeholder="your product name here"
                required
              />
              <Input
                name="price"
                type="number"
                label="Price"
                placeholder="product price"
                required
              />
              <Textarea
                name="description"
                label="Description"
                placeholder="write your product description here"
                required
              />
              <Input
                name="images"
                label="Image link"
                placeholder="your product image link here"
                required
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
                required
              />
              <button type="submit" className="primary-btn w-full">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </ModalV2>
    </>
  );
};

export default ProductManagement;
