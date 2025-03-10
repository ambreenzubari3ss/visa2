import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  postAPIWithoutAuth,
  postAPIWithAuth,
  getApiWithAuth,
} from "@/utils/api";
import { toast } from "react-toastify";
import { PAGINATION_CONFIG } from "@/config/pagination";

// Types

interface CustomersState {
  customers: any[];
  isLoading: boolean;
  error: string | null;
  total: number;
  currentPage: number;
}

// Async Actions

export const fetchCustomers = createAsyncThunk(
  "customers/fetchCustomers",
  async (
    { skip = 0, search = "" }: { skip?: number; search?: string },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await getApiWithAuth(
        // `customers/?skip=${skip}&limit=${PAGINATION_CONFIG.DEFAULT_PAGE_SIZE}`
        `customers/?skip=${skip}&limit=${PAGINATION_CONFIG.DEFAULT_PAGE_SIZE}${
          search ? `&search=${search}` : ""
        }`
      );

      if (!response.success) {
        throw new Error(response.data?.message || "Failed to fetch customers");
      }

      return {
        customers: response.data.data,
        total: response.data.meta.total,
      };
    } catch (error: any) {
      toast.error(error.message || "Failed to fetch customers");
      return rejectWithValue(error.message);
    }
  }
);

// Slice
const customersSlice = createSlice({
  name: "customers",
  initialState: {
    customers: [],
    isLoading: false,
    error: null,
    total: 0,
    currentPage: 1,
  } as CustomersState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.customers = action.payload.customers;
        state.total = action.payload.total;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setCurrentPage } = customersSlice.actions;
export default customersSlice.reducer;
