import { projectsApiSlice } from "./projectApiSlice";

export const authApiSlice = projectsApiSlice
  .enhanceEndpoints({ addTagTypes: ["User"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      login: builder.mutation({
        query: (credentials) => ({
          url: "/auth/login",
          method: "POST",
          body: { ...credentials },
        }),
        providesTags: ["User"],
      }),
      register: builder.mutation({
        query: (formFields) => ({
          url: "/auth/signup",
          method: "POST",
          body: { ...formFields },
        }),
        providesTags: ["User"],
      }),
      logout: builder.query({
        query: () => ({ url: `/auth/logout` }),
        invalidatesTags: ["User"],
      }),
    }),
  });

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutQuery,
  useLazyLogoutQuery,
} = authApiSlice;
