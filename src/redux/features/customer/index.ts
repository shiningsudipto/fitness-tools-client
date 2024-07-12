import baseApi from "../../api/baseApi";

const customerAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleCustomer: builder.query({
      query: (email) => `/customer-info?email=${email}`,
    }),
    createCustomer: builder.mutation({
      query: (customerData) => ({
        url: `/customer-create`,
        method: "POST",
        body: customerData,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const { useGetSingleCustomerQuery, useCreateCustomerMutation } =
  customerAPI;
