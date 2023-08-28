import { createSlice } from "@reduxjs/toolkit";

interface InitalStateInterface {
  activeMenu: 0 | 1 | 2 | 3;
}

export const documentSlice = createSlice({
  name: "user",
  initialState: {
    activeMenu: 0,
  } as InitalStateInterface,
  reducers: {
    setActiveMenuBar: (state, action) => {
      state.activeMenu = action.payload;
    },
  },
});

export const { setActiveMenuBar } = documentSlice.actions;

export default documentSlice.reducer;
