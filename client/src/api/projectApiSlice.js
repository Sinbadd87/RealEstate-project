import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApiSlice = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    credentials: "include",
  }),
  endpoints: (build) => ({
    getProjects: build.query({ query: () => ({ url: `/projects` }) }),
    getProjectById: build.query({
      query: (id) => ({ url: `/projects/${id}` }),
    }),
    getApartment: build.query({
      query: (id) => ({ url: `/projects/${id}/apartments` }),
    }),
    getAuthUser: build.query({ query: () => ({ url: `/auth/login` }) }),
    filterProjects: build.mutation({
      query: (formFields) => ({
        url: "/filter",
        method: "POST",
        body: { ...formFields },
      }),
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useGetApartmentQuery,
  useGetAuthUserQuery,
  useFilterProjectsMutation,
} = projectsApiSlice;
