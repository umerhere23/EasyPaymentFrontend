import { createSlice } from "@reduxjs/toolkit";
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
  extraReducers: (builder) => {},
});
export default customerSlice.reducer;
