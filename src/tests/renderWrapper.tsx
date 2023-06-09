import { BrowserRouter as Router } from "react-router-dom";
import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import type { AppStore, RootState } from "../redux/store/store";
// As a basic setup, import your same slice reducers
import { booksSlice, initialBookState } from "../redux/slices/bookSlice";
import { authSlice, initialAuthState } from "../redux/slices/authSlice";

/* export function renderWithContext(element: React.ReactElement) {
  render(
    <Provider store={store}>
      <Router>{element}</Router>
    </Provider>
  );
} */

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = { books: initialBookState, auth: initialAuthState },
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: { books: booksSlice.reducer, auth: authSlice.reducer },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        <Router >{children}</Router>
      </Provider>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

