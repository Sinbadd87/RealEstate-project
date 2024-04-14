import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApiSlice = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (build) => ({
    getProjects: build.query({ query: () => ({ url: `projects` }) }),
  }),
});

export const { useGetProjectsQuery } = projectsApiSlice;
