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
      providesTags: ["Product"],
    }),
    getSingleProduct: builder.query({
      query: (id) => `/product-details/${id}`,
    }),
    deleteProduct: builder.mutation({
      query: ({ id }) => ({
        url: `/product-delete/${id}`,
        method: "DELETE",
        body: "",
      }),
      invalidatesTags: ["Product"],
    }),
    createProduct: builder.mutation({
      query: (productData) => ({
        url: `/product-create`,
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: ({ productData, id }) => ({
        url: `/product-update/${id}`,
        method: "PATCH",
        body: productData,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
} = productAPI;
