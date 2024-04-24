import { projectsApiSlice } from "./projectApiSlice";

export const authApiSlice = projectsApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    register: builder.mutation({
      query: (formFields) => ({
        url: "/auth/signup",
        method: "POST",
        body: { ...formFields },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApiSlice;
