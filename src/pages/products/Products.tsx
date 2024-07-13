import Card from "@/components/shared/Card";
import { useGetProductsQuery } from "@/redux/features/product";
import { Slider } from "@/components/ui/slider";
import { Form, Formik } from "formik";
import { useState } from "react";
import RadioButtons from "@/components/formik/RadioButtons";
import { categoryOptions } from "@/utils/options";
import { useLocation } from "react-router-dom";
import { TProduct } from "@/types";
import Loader from "@/components/shared/Loader";
interface FormValues {
  searchTerm: string;
  sortByPrice: "asc" | "desc";
  price: number;
  categories: string[];
}

const sortByPriceOptions = [
  {
    label: "Low to High",
    value: "asc",
  },
  {
    label: "High to Low",
    value: "desc",
  },
];

const Products = () => {
  const location = useLocation();
  const category = location.state as string;
  // console.log(category);

  const initialValues: FormValues = {
    searchTerm: "",
    sortByPrice: "asc",
    price: 4000,
    categories: [`${category ? category : ""}`],
  };

  const [filters, setFilters] = useState(initialValues);
  const { data, isLoading } = useGetProductsQuery(filters);
  const allProducts: TProduct[] = data?.data;

  const handleSubmit = (values: FormValues) => {
    // console.log("Form submitted with:", values);
    setFilters(values);
  };

  if (isLoading) {
    <Loader />;
  }

  return (
    <div className="section-gap flex lg:flex-row flex-col gap-x-10 gap-y-8">
      {/* Filter section */}
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, setFieldValue, resetForm }) => (
          <Form className="space-y-4 lg:border-r lg:pr-10">
            <div>
              <input
                type="text"
                id="searchTerm"
                name="searchTerm"
                placeholder="Search"
                onChange={(e) => setFieldValue("searchTerm", e.target.value)}
                value={values.searchTerm}
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="price" className="font-medium">
                Max Price: <span className="font-bold">{values?.price}</span>{" "}
              </label>
              <Slider
                className="mt-3"
                defaultValue={[values.price]}
                max={5000}
                step={1}
                onValueChange={(e) => {
                  setFieldValue("price", e[0]);
                }}
              />
            </div>
            <RadioButtons
              label="Sort by price"
              options={sortByPriceOptions}
              name="sortByPrice"
              type="radio"
            />
            <RadioButtons
              label="Select category"
              options={categoryOptions}
              name="categories"
              type="checkbox"
            />
            <div className="flex lg:flex-col flex-row gap-x-5">
              <button
                type="submit"
                className="bg-primaryColor font-medium text-white py-2 px-4 rounded"
              >
                Apply Filters
              </button>
              <button
                type="button"
                onClick={() => {
                  resetForm();
                  setFilters(initialValues); // Reset the filters in the state as well
                }}
                className="bg-secondaryColor font-medium text-white py-2 px-4 rounded"
              >
                Clear Filter
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {/* Products */}
      <Card product={allProducts} rowItem={3} />
    </div>
  );
};

export default Products;
