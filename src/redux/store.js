import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./features/customerSlice";
export const store = configureStore({
  reducer: {
    customerSlice,
  },
});
