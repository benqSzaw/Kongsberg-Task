import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { ApiType } from "../common/Types";

interface AppState {
  data: ApiType | null;
  isLoading: boolean;
  error: Error | null;
  darkMode: boolean;
}

const initialState: AppState = {
  data: null,
  isLoading: false,
  error: null,
  darkMode: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<ApiType | null>) => {
      state.data = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<Error | null>) => {
      state.error = action.payload;
    },
    triggerDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
  },
});

export const { setData, setIsLoading, setError, triggerDarkMode } =
  appSlice.actions;

export const selectData = (state: RootState) => state.app.data;
export const selectIsLoading = (state: RootState) => state.app.isLoading;
export const selectError = (state: RootState) => state.app.error;
export const selectDarkMode = (state: RootState) => state.app.darkMode;

export default appSlice.reducer;
