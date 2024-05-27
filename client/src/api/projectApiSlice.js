import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApiSlice = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    credentials: "include",
  }),
  tagTypes: ["Reserves", "User", "Apartments"],
  endpoints: (build) => ({
    getProjects: build.query({
      query: () => ({ url: `/projects` }),
    }),
    getProjectById: build.query({
      query: (id) => ({ url: `/projects/${id}` }),
    }),
    getApartment: build.query({
      query: (id) => ({ url: `/projects/${id}/apartments` }),
      providesTags: ["Apartments", "Reserves"],
    }),
    getAuthUser: build.query({
      query: () => ({ url: `/auth/login` }),
      providesTags: ["User"],
    }),
    getReserve: build.query({
      query: () => ({ url: `/reserve` }),
      providesTags: ["Reserves", "Apartments"],
    }),
    deleteReserve: build.mutation({
      query: (id) => ({ url: `/reserve/${id}`, method: "delete" }),
      invalidatesTags: ["Reserves"],
    }),
    filterProjects: build.mutation({
      query: (formFields) => ({
        url: "/filter",
        method: "POST",
        body: { ...formFields },
      }),
    }),
    reserve: build.mutation({
      query: (reserveDetails) => ({
        url: "/reserve",
        method: "POST",
        body: reserveDetails,
      }),
      invalidatesTags: ["Reserves", "Apartments"],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useGetApartmentQuery,
  useGetReserveQuery,
  useGetAuthUserQuery,
  useDeleteReserveMutation,
  useFilterProjectsMutation,
  useReserveMutation,
} = projectsApiSlice;
