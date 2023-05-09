import { createSlice } from "@reduxjs/toolkit";
export interface AuthState {
  isAuth: boolean;
}

const initialAuthState: AuthState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      localStorage.setItem("logged", "auth");
      if (localStorage.logged === "auth") state.isAuth = true;
    },
    logout(state) {
      localStorage.clear();
      if (!localStorage.getItem("logged")) state.isAuth = false;
    },
  },
});
export const AuthActions = authSlice.actions;
