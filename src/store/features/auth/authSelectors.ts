import type { RootState } from '@/store'

export const selectAuth = (state: RootState) => state.auth
export const selectUser = (state: RootState) => state.auth.user
export const selectIsAuthenticated = (state: RootState) => !!state.auth.token
export const selectIsLoading = (state: RootState) => state.auth.isLoading
export const selectError = (state: RootState) => state.auth.error 