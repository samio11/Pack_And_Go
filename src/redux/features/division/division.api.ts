import { baseApi } from "@/redux/baseApi";

export const divisionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDivision: builder.mutation({
      query: (divisionData) => ({
        url: "/division/create",
        method: "POST",
        data: divisionData,
      }),
      invalidatesTags: ["division"],
    }),
    deleteDivision: builder.mutation({
      query: (id) => ({
        url: `/division/delete-a-division/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["division"],
    }),
    getAllDivision: builder.query({
      query: () => ({ url: "/division/get-division", method: "GET" }),
      providesTags: ["division"],
    }),
  }),
});

export const {
  useCreateDivisionMutation,
  useGetAllDivisionQuery,
  useDeleteDivisionMutation,
} = divisionApi;
