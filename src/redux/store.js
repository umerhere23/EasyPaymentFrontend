import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./features/customerSlice";
import orderSlice from "./features/OrderSlice";
export const store = configureStore({
  reducer: {
    customerSlice,
    orderSlice,
  },
});
