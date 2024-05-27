import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
  },
  reducers: {
    setProjects(state, action) {
      state.projects = action.payload;
    },
    clearProjects(state, action) {
      state.projects = null;
    },
  },
});

export const { setProjects, clearProjects } = projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;
export const selectProjects = (state) => state.projects.projects;
