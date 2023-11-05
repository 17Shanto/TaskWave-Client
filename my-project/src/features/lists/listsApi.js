import { tagTypes } from "../../utils/tagTypes";
import { apiSlice } from "../api/apiSlice";

export const ListsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createAlist: builder.mutation({
      query: (data) => ({
        url: "/lists",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [...tagTypes.lists],
    }),
    getAllLists: builder.query({
      query: () => "/lists",
      providesTags: [...tagTypes.lists],
    }),
    getListById: builder.query({
      query: (id) => `/lists/${id}`,
      providesTags: [...tagTypes.lists],
    }),
    updateListById: builder.mutation({
      query: (body) => ({
        url: `/lists/${body?.id}`,
        method: "PUT",
        body: body?.data,
      }),
      invalidatesTags: [...tagTypes.lists],
    }),
    deleteAlist: builder.mutation({
      query: (id) => ({
        url: `/lists/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [...tagTypes.lists],
    }),
  }),
});

export const {
  useCreateAlistMutation,
  useGetAllListsQuery,
  useGetListByIdQuery,
  useUpdateListByIdMutation,
  useDeleteAlistMutation,
} = ListsApi;
