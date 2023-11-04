import { apiSlice } from "../api/apiSlice";
 
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWorkspacesList: builder.query({
      query: (id) => `/workspaces/${id}/lists`,
    }),

    getWorkspaces: builder.query({
      query: () => '/workspaces',
    }),
    createWorkSpace: builder.mutation({
      query: (data) => ({
        url: "/workspaces",
        method: "POST",
        body: data,
      }),
    }),
   

    // createWorkSpaceList: builder.mutation({
    //   query: (data) => ({
    //     url: "/list",
    //     method: "POST",
    //     body: data,
    //   }),
    // })
  }),
  
});

export const {  useGetWorkspacesQuery,useCreateWorkSpaceMutation,useGetWorkspacesListQuery } = authApi;
