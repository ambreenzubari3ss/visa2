import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApiWithAuth } from "@/utils/api";
import { toast } from "react-toastify";
import { PAGINATION_CONFIG } from "@/config/pagination";

// Types

interface ApplicantsState {
  applicants: any[];
  isLoading: boolean;
  error: string | null;
  total: number;
  currentPage: number;
}

// Async Actions
export const fetchApplicants = createAsyncThunk(
  "applicants/fetchApplicants",
  async ({ skip = 0, search = "" }: { skip?: number; search?: string }, { rejectWithValue }) => {
    try {
      const response: any = await getApiWithAuth(
        `applicants/?skip=${skip}&limit=${PAGINATION_CONFIG.DEFAULT_PAGE_SIZE}${search ? `&search=${search}` : ''}`
      );

      if (!response.success) {
        throw new Error(response.message || "Failed to fetch applicants");
      }

      return {
        applicants: response.data,
        total: response.results,
      };
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch applicants");
    }
  }
);

// Slice
const applicantsSlice = createSlice({
  name: "applicants",
  initialState: {
    applicants: [],
    isLoading: false,
    error: null,
    total: 0,
    currentPage: 1,
  } as ApplicantsState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplicants.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchApplicants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.applicants = action.payload.applicants;
        state.total = action.payload.total;
      })
      .addCase(fetchApplicants.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        toast.error(action.payload as string);
      });
  },
});

export const { setCurrentPage } = applicantsSlice.actions;
export default applicantsSlice.reducer;
