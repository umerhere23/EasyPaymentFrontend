import { createSlice } from "@reduxjs/toolkit";
import { getAllCustomers } from "../../components/customers/actions";
const initialState = {
  loading: false,
  error: "",
  customers: [],
};
// customer slice
const customerSlice = createSlice({
  name: "customerSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCustomers.pending, (state, action) => {
        console.log("loading....");
        state.loading = true;
      })
      .addCase(getAllCustomers.fulfilled, (state, action) => {
        console.log("fulfilled");
        state.loading = false;
        state.customers = action.payload;
      })
      .addCase(getAllCustomers.rejected, (state, action) => {
        state.error = action.payload;
        console.log("rejected");
        state.loading = false;
      });
  },
});
export default customerSlice.reducer;
