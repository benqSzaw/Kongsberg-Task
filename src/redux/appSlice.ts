import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { ApiType } from "../common/Types";

interface AppState {
  data: ApiType | null;
  isLoading: boolean;
  error: Error | null;
  inputValue: string;
}

const initialState: AppState = {
  data: null,
  isLoading: false,
  error: null,
  inputValue: "",
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
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
});

export const { setData, setIsLoading, setError, setInputValue } =
  appSlice.actions;

export const selectData = (state: RootState) => state.app.data;
export const selectIsLoading = (state: RootState) => state.app.isLoading;
export const selectError = (state: RootState) => state.app.error;
export const selectInputValue = (state: RootState) => state.app.inputValue;

export default appSlice.reducer;
