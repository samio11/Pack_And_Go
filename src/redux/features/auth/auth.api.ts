import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userData) => ({
        url: "/auth/login",
        method: "POST",
        data: userData,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/user/create",
        method: "POST",
        data: userData,
      }),
    }),
    setOTP: builder.mutation({
      query: (userData) => ({
        url: "/otp/send-otp",
        method: "POST",
        data: userData,
      }),
    }),
    verifyOTP: builder.mutation({
      query: (otpData) => ({
        url: "/otp/verify-otp",
        method: "POST",
        data: otpData,
      }),
    }),
    changePassword: builder.mutation({
      query: (passwordData) => ({
        url: "/auth/change-password",
        method: "POST",
        data: passwordData,
      }),
    }),
    logout: builder.mutation({
      query: () => ({ url: "/auth/logout", method: "POST" }),
      invalidatesTags: ["user"],
    }),
    googleLogin: builder.query({
      query: () => ({ url: "/auth/google", method: "GET" }),
    }),
    getAllUser: builder.query({
      query: () => ({ url: "/user/all-user", method: "GET" }),
      providesTags: ["user"],
    }),
    getMyData: builder.query({
      query: () => ({ url: "/user/get-me", method: "GET" }),
      providesTags: ["user"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useSetOTPMutation,
  useVerifyOTPMutation,
  useChangePasswordMutation,
  useLogoutMutation,
  useGoogleLoginQuery,
  useGetAllUserQuery,
  useGetMyDataQuery,
} = authApi;
