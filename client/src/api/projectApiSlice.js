import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApiSlice = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    credentials: "include",
  }),
  endpoints: (build) => ({
    getProjects: build.query({ query: () => ({ url: `/projects` }) }),
    getAuthUser: build.query({ query: () => ({ url: `/auth/login` }) }),
  }),
});

export const { useGetProjectsQuery, useGetAuthUserQuery } = projectsApiSlice;