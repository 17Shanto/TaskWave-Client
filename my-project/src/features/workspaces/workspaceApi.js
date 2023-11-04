import { apiSlice } from "../api/apiSlice";
 
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWorksapceAll: builder.query({
      query: () => ({
        
        url: "/workspaces",
        method:'GET',
         
      }),
            
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

export const { useGetWorksapceAllQuery,useCreateWorkSpaceMutation } = authApi;
