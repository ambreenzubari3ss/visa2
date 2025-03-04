import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import sidebarReducer from "./slices/sidebarSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import usersSlice from "./slices/usersSlice";
import customersSlice from "./slices/customersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    users: usersSlice,
    customers: customersSlice,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
