import { baseApi } from "@/redux/baseApi";

export const tourApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTour: builder.mutation({
      query: (tourData) => ({
        url: "/tour/create-tour",
        method: "POST",
        data: tourData,
      }),
      invalidatesTags: ["tour"],
    }),
    deleteTour: builder.mutation({
      query: (id) => ({
        url: `/tour/delete-tour/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["tour"],
    }),
    getAllTour: builder.query({
      query: () => ({
        url: `/tour/get-all-tour`,
        method: "GET",
      }),
      providesTags: ["tour"],
    }),
  }),
});

export const {
  useCreateTourMutation,
  useGetAllTourQuery,
  useDeleteTourMutation,
} = tourApi;
