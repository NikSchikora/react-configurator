import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const configSlice = createSlice({
  name: "config",
  initialState: {
    color: 1,
    engine: 1,
  },
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload;
    },
    changeEngine: (state, action) => {
      state.engine = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeColor, changeEngine } = configSlice.actions;

export default configSlice.reducer;
