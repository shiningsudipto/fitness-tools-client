import Card from "@/components/shared/Card";
import { useGetProductsQuery } from "@/redux/features/product";
import { Slider } from "@/components/ui/slider";
import { Form, Formik } from "formik";
import { useState } from "react";
import RadioButtons from "@/components/formik/RadioButtons";

const initialValues = {
  searchTerm: "",
  sortByPrice: "asc",
  price: 4000,
  categories: [],
};

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

const categoryOptions = [
  { label: "Cardio", value: "Cardio" },
  { label: "Strength", value: "Strength" },
  { label: "Yoga & Pilates", value: "yoga_pilates" },
  { label: "Accessories", value: "Accessories" },
];

const Products = () => {
  const [filters, setFilters] = useState(initialValues);
  const { data } = useGetProductsQuery(filters);
  const allProducts = data?.data;

  const handleSubmit = (values) => {
    // console.log("Form submitted with:", values);
    setFilters(values);
  };

  return (
    <div className="section-gap flex gap-x-10">
      {/* Filter section */}
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, setFieldValue }) => (
          <Form className="space-y-4">
            <div>
              <input
                type="text"
                id="searchTerm"
                name="searchTerm"
                placeholder="Search"
                onChange={(e) => setFieldValue("searchTerm", e.target.value)}
                value={values.searchTerm}
                className="border rounded p-2"
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
            <button
              type="submit"
              className="bg-primaryColor text-white py-2 px-4 rounded"
            >
              Apply Filters
            </button>
          </Form>
        )}
      </Formik>
      {/* Products */}
      <Card product={allProducts} rowItem={3} />
    </div>
  );
};

export default Products;
