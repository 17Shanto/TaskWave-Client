import { tagTypes } from "../../utils/tagTypes";
import { apiSlice } from "../api/apiSlice";

export const TaskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createATask: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [...tagTypes.tasks],
    }),
    getAllTasks: builder.query({
      query: () => "/tasks",
      providesTags: [...tagTypes.tasks],
    }),
    getTasksById: builder.query({
      query: (id) => `/tasks/${id}`,
      providesTags: [...tagTypes.tasks],
    }),
    updateTaskById: builder.mutation({
      query: (body) => ({
        url: `/tasks/${body?.id}`,
        method: "PUT",
        body: body?.data,
      }),
      invalidatesTags: [...tagTypes.tasks],
    }),
    deleteAtask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [...tagTypes.tasks],
    }),
  }),
});

export const {
  useCreateATaskMutation,
  useGetAllTasksQuery,
  useGetTasksByIdQuery,
  useUpdateTaskByIdMutation,
  useDeleteAtaskMutation,
} = TaskApi;
