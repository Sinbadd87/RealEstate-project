import { configureStore } from "@reduxjs/toolkit";
import { projectsApiSlice } from "../api/projectApiSlice.js";
import authReducer from "../features/auth/authSlice.js";
import { dualSliderReducer } from "../features/dualSliderSlice.js";
import { projectsReducer } from "../features/projectsSlice.js";

export const store = configureStore({
  reducer: {
    [projectsApiSlice.reducerPath]: projectsApiSlice.reducer,
    auth: authReducer,
    dualSlider: dualSliderReducer,
    projects: projectsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectsApiSlice.middleware),
});
