import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token; // Assuming you store the token in the auth slice
    //   if (token) {
    //     headers.set("Authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    getProductName: builder.query({
      query: () => `/`,
    }),
  }),
});

export const { useGetProductNameQuery } = productApi;

// setupListeners(store.dispatch)

// useGetProductNameQuery how to get it  , cntr + space
