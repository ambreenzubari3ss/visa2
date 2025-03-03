import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postAPIWithoutAuth, postAPIWithAuth } from "@/utils/api";
import { toast } from 'react-toastify';

// Types
interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

// Async Actions
export const loginUser = createAsyncThunk(
  "auth/login",
  async (
    credentials: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const formData = new URLSearchParams();
      formData.append('grant_type', '');
      formData.append('username', credentials.username);
      formData.append('password', credentials.password);
      formData.append('scope', '');
      formData.append('client_id', '');
      formData.append('client_secret', '');

      const response: any = await postAPIWithoutAuth(
        "login",
        formData.toString(),
        {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      );
      
      if (!response.success) {
        toast.error(response.data?.message || "Login failed");
        return rejectWithValue(response.data?.message || "Login failed");
      }

      // Store token in localStorage
      if (response.data?.access_token) {
        localStorage.setItem("token", response.data.access_token);
      }
      
      toast.success("Login successful!");
      return {
        token: response.data.access_token,
        user: response.data.user
      };
    } catch (error: any) {
      toast.error(error.message || "An error occurred during login");
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await postAPIWithAuth("/auth/logout", {});
      return null;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
    isLoading: false,
    error: null,
  } as AuthState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    // Login
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Logout
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    });
  },
});

export const { clearError, logout } = authSlice.actions;
export default authSlice.reducer;
