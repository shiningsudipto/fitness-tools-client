import baseApi from "../../api/baseApi";

const productAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
    }),
    getSingleProduct: builder.query({
      query: (id) => `/product-details/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productAPI;
