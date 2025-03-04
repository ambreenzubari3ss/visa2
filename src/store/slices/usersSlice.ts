import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  postAPIWithoutAuth,
  postAPIWithAuth,
  getApiWithAuth,
} from "@/utils/api";
import { toast } from "react-toastify";
import { PAGINATION_CONFIG } from "@/config/pagination";

// Types

interface UsersState {
  users: any[];
  isLoading: boolean;
  error: string | null;
  total: number;
  currentPage: number;
}

// Async Actions

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async ({ skip = 0 }: { skip?: number }, { rejectWithValue }) => {
    try {
      const response: any = await getApiWithAuth(
        `users/?skip=${skip}&limit=${PAGINATION_CONFIG.DEFAULT_PAGE_SIZE}`
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

// export const deleteUser = createAsyncThunk(
//   "users/deleteUser",
//   async (userId: number, { rejectWithValue }) => {
//     try {
//       const response: any = await deleteApi(`users/${userId}`);

//       if (!response.success) {
//         throw new Error(response.data?.message || "Failed to delete user");
//       }

//       return userId;
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// Slice
const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    error: null,
    total: 0,
    currentPage: 1,
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
    //   .addCase(deleteUser.pending, (state) => {
    //     state.isLoading = true;
    //     state.error = null;
    //   })
    //   .addCase(deleteUser.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.users = state.users.filter(user => user.id !== action.payload);
    //     state.total -= 1;

    //     const totalPages = Math.ceil((state.total) / state.limit);
    //     if (state.users.length === 0 && state.currentPage > 1) {
    //       state.currentPage -= 1;
    //     }
    //   })
    //   .addCase(deleteUser.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload as string;
    //   });
  },
});

export const { clearError, logout, setCurrentPage } = usersSlice.actions;
export default usersSlice.reducer;
