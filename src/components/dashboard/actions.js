import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
const url = process.env.REACT_APP_API_URL;
const subUrl = "customer/table";
// add table action
export const addTable = createAsyncThunk(
  "tableSlice/addTable",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${url}/${subUrl}`, data);
      toast.success(response.data.message);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// get all tables action
export const getTables = createAsyncThunk(
  "tableSlice/getTables",
  async (_, thunkAPI) => {
    try {
      const response = await axios(`${url}/${subUrl}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to load tables");
    }
  }
);
