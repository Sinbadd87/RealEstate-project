import { configureStore } from "@reduxjs/toolkit";
import { projectsApiSlice } from "../api/projectApiSlice.js";
import authReducer from "../features/auth/authSlice.js";

export const store = configureStore({
  reducer: {
    [projectsApiSlice.reducerPath]: projectsApiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectsApiSlice.middleware),
});
