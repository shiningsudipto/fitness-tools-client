import Dropdown from "@/components/formik/Dropdown";
import Input from "@/components/formik/Input";
import Textarea from "@/components/formik/Textarea";
import { useUpdateProductMutation } from "@/redux/features/product";
import { TProduct, TProductFormValues } from "@/types";
import { categoryOptions } from "@/utils/options";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import ModalV2 from "@/components/shared/ModalV2";
import { Dispatch, SetStateAction } from "react";

interface EditProductProps {
  item: TProduct;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const EditProduct: React.FC<EditProductProps> = ({
  item,
  isOpen,
  setIsOpen,
}) => {
  const [productData] = useUpdateProductMutation();
  // console.log("res:", data, error);

  const initialValues: TProductFormValues = {
    name: item?.name,
    price: item?.price,
    description: item?.description,
    images: item?.images,
    category: item?.category,
    stock: item?.stock,
  };
  const handleSubmit = async (values: TProductFormValues) => {
    // console.log(values);
    const productEditState = toast.loading("Product updating");
    try {
      await productData({ productData: values, id: item._id });
      toast.dismiss(productEditState);
      toast.success("Product updated successfully");
      setIsOpen(false);
    } catch (error) {
      console.log("error:", error);
      toast.error("Failed to update product");
    }
  };
  return (
    <ModalV2 isOpen={isOpen} setIsOpen={setIsOpen}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, setFieldValue }) => (
          <Form className="space-y-4">
            <Input
              name="name"
              label="Product name"
              placeholder="your product name here"
              defaultValue={values?.name}
              required
            />
            <Input
              name="price"
              type="number"
              label="Price"
              placeholder="product price"
              defaultValue={values?.price}
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
              defaultValue={values?.images}
              required
            />
            <Dropdown
              setFieldValue={setFieldValue}
              name="category"
              label="Category"
              placeholder="select category"
              options={categoryOptions}
              defaultValue={values?.category}
            />
            <Input
              name="stock"
              type="number"
              label="Stock"
              placeholder="product stock"
              defaultValue={values?.stock}
              required
            />
            <button type="submit" className="primary-btn w-full">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </ModalV2>
  );
};

export default EditProduct;
