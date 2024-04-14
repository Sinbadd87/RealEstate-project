import { configureStore } from "@reduxjs/toolkit";
import { projectsApiSlice } from "../api/project.api.js";

export const store = configureStore({
  reducer: {
    [projectsApiSlice.reducerPath]: projectsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectsApiSlice.middleware),
});
