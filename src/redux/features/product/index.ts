import baseApi from "../../api/baseApi";

const productAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSomething: builder.query({
      query: () => ``,
    }),
  }),
});

export const { useGetSomethingQuery } = productAPI;
