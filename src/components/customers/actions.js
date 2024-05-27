import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://localhost:3000";
export const getAllCustomers = createAsyncThunk(
  "customerSlice/getAllCustomers",
  async (_, thunkAPI) => {
    try {
      const response = await axios(`${BASE_URL}/customer/customers`);
      const data = response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
