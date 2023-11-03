import { apiSlice } from "../api/apiSlice";
 
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWorksapceAll: builder.query({
      query: () =>"/workspaces",   
    }),
     
  }),
  
});

export const { useGetWorksapceAllQuery } = authApi;
