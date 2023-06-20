import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { ApiType } from "../common/Types";

interface AppState {
  data: ApiType | null;
  isLoading: boolean;
  error: Error | null;
  inputValue: string;
  selectedRow: number;
}

const initialState: AppState = {
  data: null,
  isLoading: false,
  error: null,
  inputValue: "",
  selectedRow: -1,
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
    setRow: (state, action: PayloadAction<number>) => {
      state.selectedRow = action.payload;
    },
  },
});

export const { setData, setIsLoading, setError, setInputValue, setRow } =
  appSlice.actions;

export const selectData = (state: RootState) => state.app.data;
export const selectIsLoading = (state: RootState) => state.app.isLoading;
export const selectError = (state: RootState) => state.app.error;
export const selectInputValue = (state: RootState) => state.app.inputValue;
export const selectRow = (state: RootState) => state.app.selectedRow;

export default appSlice.reducer;
