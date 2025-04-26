import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Auth",
  initialState: {
    user: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    // deleteTodo: (state, action) => {
    //   state.todo.splice(action.payload.index, 1);
    // },
  },
});

export const { addUser } = authSlice.actions;
export default authSlice.reducer;
