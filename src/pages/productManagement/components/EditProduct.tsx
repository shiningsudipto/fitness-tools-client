import Dropdown from "@/components/formik/Dropdown";
import Input from "@/components/formik/Input";
import Textarea from "@/components/formik/Textarea";
import { useUpdateProductMutation } from "@/redux/features/product";
import { categoryOptions } from "@/utils/options";
import { Form, Formik } from "formik";

const EditProduct = ({ item }) => {
  const [productData, { data, error }] = useUpdateProductMutation();
  // console.log("res:", data, error);

  const initialValues = {
    name: item?.name,
    price: item?.price,
    description: item?.description,
    images: item?.images,
    category: item?.category,
    stock: item?.stock,
  };
  const handleSubmit = async (values) => {
    // console.log(values);
    try {
      await productData({ productData: values, id: item._id });
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form className="space-y-4">
          <Input
            name="name"
            label="Product name"
            placeholder="your product name here"
            defaultValue={values?.name}
          />
          <Input
            name="price"
            type="number"
            label="Price"
            placeholder="product price"
            defaultValue={values?.price}
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
            defaultValue={values?.images}
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
          />
          <button type="submit" className="primary-btn w-full">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default EditProduct;
