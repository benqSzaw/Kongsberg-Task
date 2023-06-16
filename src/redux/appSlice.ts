import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface AppState {
  data: any;
  darkMode: boolean;
}

const initialState: AppState = {
  data: {},
  darkMode: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    triggerDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
  },
});

export const { setData, triggerDarkMode } = appSlice.actions;

export const selectData = (state: RootState) => state.app.data;
export const selectDarkMode = (state: RootState) => state.app.darkMode;

export default appSlice.reducer;
