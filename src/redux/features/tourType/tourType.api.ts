import { baseApi } from "@/redux/baseApi";

export const tourTypeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTourType: builder.mutation({
      query: (tourTypeData) => ({
        url: "/tour/create-tour-type",
        method: "POST",
        data: tourTypeData,
      }),
      invalidatesTags: ["tourType"],
    }),
    deleteTourType: builder.mutation({
      query: (id) => ({
        url: `/tour/delete-tour-type/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["tourType"],
    }),
    getAllTourType: builder.query({
      query: () => ({
        url: `/tour/get-all-tour-type`,
        method: "GET",
      }),
      providesTags: ["tourType"],
    }),
  }),
});

export const {
  useCreateTourTypeMutation,
  useGetAllTourTypeQuery,
  useDeleteTourTypeMutation,
} = tourTypeApi;
