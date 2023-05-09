import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  getBooksData,
  getBook,
  searchForBooks,
  updateBookShelf,
} from "../helper";
import { responseInterface, BooksState, Book } from "../booksModel";

export const initialBookState: BooksState = {
  loading: false,
  searchResults: [],
  data: [],
};

export const booksSlice = createSlice({
  name: "booksSlice",
  initialState: initialBookState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooksData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getBooksData.fulfilled,
      (state, action: PayloadAction<[Book]>) => {
        state.data = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(getBooksData.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBook.fulfilled, (state, action) => {
      state.data = [action.payload];
      state.loading = false;
    });
    builder.addCase(getBook.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(searchForBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      searchForBooks.fulfilled,
      (state, action: PayloadAction<Book[]>) => {
        state.searchResults = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(searchForBooks.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(updateBookShelf.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      updateBookShelf.fulfilled,
      (state, action: PayloadAction<responseInterface>) => {
        state.data.map((changedBook) =>
          changedBook.id === action.payload.book.book.id
            ? (changedBook.shelf = action.payload.book.shelf)
            : changedBook
        );
        state.loading = false;
      }
    );
    builder.addCase(updateBookShelf.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const BooksActions = booksSlice.actions;
