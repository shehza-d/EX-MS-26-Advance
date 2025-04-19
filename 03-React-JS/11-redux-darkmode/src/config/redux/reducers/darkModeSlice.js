import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    darkMode: true,
    color: "blue",
  },
  reducers: {
    changeMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { changeMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;

// https://console.firebase.google.com/