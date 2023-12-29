import { createAsyncThunk } from "@reduxjs/toolkit";

import { FetchedTopSale, fetchProduct, fetchTopSales } from "api";

export const fetchTopSalesAction = createAsyncThunk<FetchedTopSale[], void>(
  "products/fetchTopSales",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await fetchTopSales();

      return result;
    } catch (error) {
        console.error("Error fetching Top Sales", error);
      return rejectWithValue(error);
    }
  }
);


export const fetchProductAction = createAsyncThunk<any, string>(
  "products/fetchProduct",
  async (id, { rejectWithValue }) => {
    try {
      return await fetchProduct(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


