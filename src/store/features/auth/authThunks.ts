import { createAsyncThunk } from "@reduxjs/toolkit";
import type { LoginCredentials, SignupCredentials } from "./types";
import { postAPIWithoutAuth } from "@/utils/api";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const response: any = await postAPIWithoutAuth(
        "/auth/login",
        credentials
      );
      if (!response.success) {
        return rejectWithValue(response.error);
      }
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signup",
  async (credentials: SignupCredentials, { rejectWithValue }) => {
    try {
      const response: any = await postAPIWithoutAuth(
        "/auth/signup",
        credentials
      );
      if (!response.success) {
        return rejectWithValue(response.error);
      }
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await postAPIWithoutAuth("/auth/logout", {});
      return null;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
