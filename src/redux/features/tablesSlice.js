import { createSlice } from "@reduxjs/toolkit";
import { addTable, getTables } from "../../components/dashboard/actions";
const initialState = {
  loading: false,
  error: null,
  tables: null,
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
      })
      .addCase(getTables.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTables.fulfilled, (state, action) => {
        state.loading = false;
        state.tables = action.payload;
      })
      .addCase(getTables.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default tableSlice.reducer;
