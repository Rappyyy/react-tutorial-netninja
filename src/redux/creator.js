import { createSlice } from "@reduxjs/toolkit";

export const creatorSlice = createSlice({
  name: "creator",
  initialState: {
    creator: "mario",
  },
  reducers: {
    setCreator: (state, action) => {
      state.creator = action.payload;
    },
  },
});

export const { setCreator } = creatorSlice.actions;

export default creatorSlice.reducer;
