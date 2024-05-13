import { createSlice } from "@reduxjs/toolkit";

export const dualSliderSlice = createSlice({
  name: "dualSlider",
  initialState: { minVal: 0, maxVal: 1000 },
  reducers: {
    setMinVal(state, action) {
      state.minVal = action.payload;
    },
    setMaxVal(state, action) {
      state.maxVal = action.payload;
    },
  },
});

export const { setMinVal, setMaxVal } = dualSliderSlice.actions;
export const dualSliderReducer = dualSliderSlice.reducer;
export const selectMinVal = (state) => state.dualSlider.minVal;
export const selectMaxVal = (state) => state.dualSlider.maxVal;
