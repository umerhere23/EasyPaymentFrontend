import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./features/customerSlice";
import orderReducer from "./features/OrderSlice";
import tableReducer from "./features/tablesSlice";
export const store = configureStore({
  reducer: {
    customerReducer,
    orderReducer,
    tableReducer,
  },
});
