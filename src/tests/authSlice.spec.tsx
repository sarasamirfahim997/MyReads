import store from "../redux/store/store";
import { authSlice } from "../redux/slices/authSlice";

describe("Getting All Books List Action", () => {
  const initialState = authSlice.getInitialState();
  test("initialize slice with initialValue", () => {
    const authSliceInit = authSlice.getInitialState();
    expect(authSliceInit).toBe(initialState);
  });
  test("change authState to true on login", () => {
    const state = store.getState().auth;
    store.dispatch(authSlice.actions.login());
    expect(state).toEqual({ isAuth: true });
  });
  test("change authState to false on logout", () => {
    store.dispatch(authSlice.actions.logout());
    const state = store.getState().auth;
    expect(state).toEqual({ isAuth: false });
  });
});
