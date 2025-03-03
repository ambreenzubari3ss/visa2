import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postAPIWithoutAuth, postAPIWithAuth } from "@/utils/api";
import { toast } from "react-toastify";

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
      formData.append("grant_type", "");
      formData.append("username", credentials.username);
      formData.append("password", credentials.password);
      formData.append("scope", "");
      formData.append("client_id", "");
      formData.append("client_secret", "");

      const response: any = await postAPIWithoutAuth(
        "login",
        formData.toString()
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
        user: response.data.user,
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

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email: string, { rejectWithValue }) => {
    try {
      const response: any = await postAPIWithoutAuth(
        "forgot-password",
        JSON.stringify({ email }),
        {
          "Content-Type": "application/json", // Override default content type as this API expects JSON
        }
      );

      if (!response.success) {
        toast.error(response.data?.message || "Password reset request failed");
        return rejectWithValue(
          response.data?.message || "Password reset request failed"
        );
      }
      toast.success(
        response.data?.message ||
          "Password reset instructions sent to your email"
      );
      return response.data;
    } catch (error: any) {
      toast.error(error.message || "Failed to send reset instructions");
      return rejectWithValue(error.message);
    }
  }
);

export const verifyResetPin = createAsyncThunk(
  "auth/verifyResetPin",
  async (data: { email: string; pin: string }, { rejectWithValue }) => {
    try {
      const response: any = await postAPIWithoutAuth(
        "verify-reset-pin",
        JSON.stringify({
          email: data.email,
          pin: data.pin,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      console.log("RESPONSE____", response);

      if (!response.success) {
        console.log("RESPONSE", response.data.message);
        toast.error(response.data.message || "PIN verification failed");
        return rejectWithValue(response.data || "PIN verification failed");
      }

      toast.success("PIN verified successfully");
      return response.data;
    } catch (error: any) {
      console.log("ERROR___", error);
      toast.error(error.message || "Failed to verify PIN");
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

    // Forgot Password
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Verify Reset PIN
    builder
      .addCase(verifyResetPin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyResetPin.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(verifyResetPin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError, logout } = authSlice.actions;
export default authSlice.reducer;
