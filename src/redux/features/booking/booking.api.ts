import { baseApi } from "@/redux/baseApi";

export const bookingAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: "/booking/create",
        method: "POST",
        data: bookingData,
      }),
      invalidatesTags: ["booking"],
    }),
    deleteBooking: builder.mutation({
      query: (bookingId) => ({
        url: `/delete-booking/${bookingId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["booking"],
    }),
    getAllBooking: builder.query({
      query: () => ({ url: "/booking/get-all-booking", method: "GET" }),
      providesTags: ["booking"],
    }),
    getABooking: builder.query({
      query: () => ({ url: "/booking/get-a-booking", method: "GET" }),
      providesTags: ["booking"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetABookingQuery,
  useGetAllBookingQuery,
  useDeleteBookingMutation,
} = bookingAPi;
