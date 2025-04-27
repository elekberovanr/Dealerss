import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsThunk = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get("https://northwind.vercel.app/api/categories");
  return response.data;
});

export const getProductThunk = createAsyncThunk("products/get", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

export const postProductThunk = createAsyncThunk("products/add", async (data) => {
  const response = await axios.post("https://northwind.vercel.app/api/categories", data);
  return response.data;
});

export const deleteProductThunk = createAsyncThunk(
  "products/delete",
  async (productId) => {
    await axios.delete(`https://northwind.vercel.app/api/categories/${productId}`);
    return productId;
  }
);

export const updateProductThunk = createAsyncThunk(
  "products/update",
  async ({ id, updatedData }) => {
    const response = await axios.put(
      `https://northwind.vercel.app/api/categories/${id}`,
      updatedData
    );
    return response.data;
  }
);


const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(getProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postProductThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(getProductThunk.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(updateProductThunk.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      
  },
});

export default productSlice.reducer;
