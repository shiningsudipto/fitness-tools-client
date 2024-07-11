import { ProductFilters } from "@/types";
import baseApi from "../../api/baseApi";

const productAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<any, ProductFilters>({
      query: (filters) => {
        const params = new URLSearchParams(
          filters as Record<string, string>
        ).toString();
        return `products?${params}`;
      },
    }),
    getSingleProduct: builder.query({
      query: (id) => `/product-details/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productAPI;
