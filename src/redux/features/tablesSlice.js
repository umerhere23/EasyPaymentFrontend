import { createSlice } from "@reduxjs/toolkit";
import { addTable } from "../../components/dashboard/actions";
const initialState = {
  loading: false,
  error: null,
  tables: "",
};
const tableSlice = createSlice({
  name: "tableSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTable.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addTable.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addTable.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});
export default tableSlice.reducer;
