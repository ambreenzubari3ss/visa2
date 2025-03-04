import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  postAPIWithoutAuth,
  postAPIWithAuth,
  getApiWithAuth,
} from "@/utils/api";
import { toast } from "react-toastify";

// Types

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  created_at: string;
  phone: string;
  last_login: string;
  is_active: boolean;
}

interface UsersState {
  users: User[];
  isLoading: boolean;
  error: string | null;
  total: number;
  currentPage: number;
  limit: number;
}

// Async Actions

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (
    { skip = 0, limit = 1 }: { skip?: number; limit?: number },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await getApiWithAuth(
        `users/?skip=${skip}&limit=${limit}`
      );

      if (!response.success) {
        throw new Error(response.data?.message || "Failed to fetch users");
      }
      console.log("response.data.meta.total", response.data.meta.results);
      return {
        users: response.data.data,
        total: response.data.meta.total,
      };
    } catch (error: any) {
      toast.error(error.message || "Failed to fetch users");
      return rejectWithValue(error.message);
    }
  }
);

// Slice
const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    error: null,
    total: 0,
    currentPage: 1,
    limit: 1,
  } as UsersState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.users = [];
      localStorage.removeItem("token");
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.users;
        state.total = action.payload.total;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError, logout, setCurrentPage } = usersSlice.actions;
export default usersSlice.reducer;
