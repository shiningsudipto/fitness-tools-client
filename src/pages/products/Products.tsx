/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from "@/components/shared/Card";
import { useGetProductsQuery } from "@/redux/features/product";
import { Slider } from "@/components/ui/slider";
import { Formik, Form } from "formik";
import { useState, useCallback } from "react";
import { categoryOptions } from "@/utils/options";
import { useLocation } from "react-router-dom";
import { TProduct } from "@/types";
import Loader from "@/components/shared/Loader";
import debounce from "lodash.debounce";

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

  const initialValues: FormValues = {
    searchTerm: "",
    sortByPrice: "asc",
    price: 4000,
    categories: [`${category ? category : ""}`],
  };

  const [filters, setFilters] = useState(initialValues);
  const { data, isLoading } = useGetProductsQuery(filters);
  const allProducts: TProduct[] = data?.data;

  const debouncedSetFilters = useCallback(
    debounce((newFilters: FormValues) => setFilters(newFilters), 300),
    []
  );

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any) => void,
    values: FormValues
  ) => {
    setFieldValue("searchTerm", e.target.value);
    debouncedSetFilters({ ...values, searchTerm: e.target.value });
  };

  const handlePriceChange = (
    value: number[],
    setFieldValue: (field: string, value: any) => void,
    values: FormValues
  ) => {
    setFieldValue("price", value[0]);
    debouncedSetFilters({ ...values, price: value[0] });
  };

  const handleSortChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any) => void,
    values: FormValues
  ) => {
    setFieldValue("sortByPrice", e.target.value);
    debouncedSetFilters({
      ...values,
      sortByPrice: e.target.value as "asc" | "desc",
    });
  };

  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any) => void,
    values: FormValues
  ) => {
    const newCategories = e.target.checked
      ? [...values.categories, e.target.value]
      : values.categories.filter((v) => v !== e.target.value);
    setFieldValue("categories", newCategories);
    debouncedSetFilters({ ...values, categories: newCategories });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="section-gap flex lg:flex-row flex-col gap-x-10 gap-y-8">
      {/* Filter section */}
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        {({ values, setFieldValue }) => (
          <Form className="space-y-4 lg:border-r lg:pr-10">
            <div>
              <input
                type="text"
                id="searchTerm"
                name="searchTerm"
                placeholder="Search"
                onChange={(e) => handleSearchChange(e, setFieldValue, values)}
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
                onValueChange={(value) =>
                  handlePriceChange(value, setFieldValue, values)
                }
              />
            </div>
            <div className="font-publicSans">
              <p className="font-medium mb-2">Sort by price</p>
              <div className="flex flex-col gap-y-1">
                {sortByPriceOptions.map((option) => (
                  <div
                    key={option.label}
                    className="form-control flex items-center gap-x-2"
                  >
                    <input
                      type="radio"
                      id={option.value}
                      name="sortByPrice"
                      value={option.value}
                      checked={values.sortByPrice === option.value}
                      onChange={(e) =>
                        handleSortChange(e, setFieldValue, values)
                      }
                      className="accent-secondaryColor radio"
                    />
                    <label
                      htmlFor={option.value}
                      className="label flex flex-col items-start cursor-pointer"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="font-publicSans">
              <p className="font-medium mb-2">Select category</p>
              <div className="flex flex-col gap-y-1">
                {categoryOptions.map((option) => (
                  <div
                    key={option.label}
                    className="form-control flex items-center gap-x-2"
                  >
                    <input
                      type="checkbox"
                      id={option.value}
                      name="categories"
                      value={option.value}
                      checked={values.categories.includes(option.value)}
                      onChange={(e) =>
                        handleCategoryChange(e, setFieldValue, values)
                      }
                      className="accent-secondaryColor checkbox"
                    />
                    <label
                      htmlFor={option.value}
                      className="label flex flex-col items-start cursor-pointer"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex lg:flex-col flex-row gap-x-5 gap-y-4">
              <button
                type="button"
                onClick={() => {
                  setFilters(initialValues);
                  setFieldValue("searchTerm", "");
                  setFieldValue("sortByPrice", "asc");
                  setFieldValue("price", 4000);
                  setFieldValue("categories", []);
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
