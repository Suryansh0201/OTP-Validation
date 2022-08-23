import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const OTPApi = createApi({
  reducerPath: "OTPApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/Server/user/" }),
  endpoints: (builder) => ({
    validationUser: builder.mutation({
      query: (user) => {
        return {
          url: "valid",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    verifyOTP: builder.mutation({
      query: (user) => {
        return {
          url: "verify",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
  }),
});

export const {useValidationUserMutation, useVerifyOTPMutation} = OTPApi;

