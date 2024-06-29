import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    value: 0,
  },
  reducers: {
    logedIn: (state, action) => {
      state.value = action.payload;
    },
  },
});


export const { logedIn } = userSlice.actions;
export default userSlice.reducer;
