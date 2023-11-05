import { tagTypes } from "../../utils/tagTypes";
import { apiSlice } from "../api/apiSlice";

export const workSpaceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWorkspacesListandTasks: builder.query({
      query: (id) => `/workspaces/${id}/lists`,
    }),

    getWorkspaces: builder.query({
      query: () => "/workspaces",
      providesTags: [...tagTypes.workspace],
    }),
    getSingleWorkSpaces: builder.query({
      query: (id) => `/workspaces/${id}`,
      providesTags: [...tagTypes.workspace],
    }),
    createWorkSpace: builder.mutation({
      query: (data) => ({
        url: "/workspaces",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [...tagTypes.workspace],
    }),
    updateWorkSpaceById: builder.mutation({
      query: (body) => ({
        url: `/workspaces/${body?.id}`,
        method: "PUT",
        body: body?.data,
      }),
      invalidatesTags: [...tagTypes.workspace],
    }),
    deleteWorkSpaceById: builder.mutation({
      query: (id) => ({
        url: `/workspaces/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [...tagTypes.workspace],
    }),
  }),
});

export const {
  useGetWorkspacesQuery,
  useCreateWorkSpaceMutation,
  useGetWorkspacesListandTasksQuery,
  useUpdateWorkSpaceByIdMutation,
  useDeleteWorkSpaceByIdMutation,
  useGetSingleWorkSpacesQuery,
} = workSpaceApi;
