import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  error: "",
  orders: [],
};
// customer slice
const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
export default orderSlice.reducer;
