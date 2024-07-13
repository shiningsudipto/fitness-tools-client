import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-4-ruddy-one.vercel.app/api",
  }),
  tagTypes: ["Product"],
  endpoints: () => ({}),
});

export default baseApi;
