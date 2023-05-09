import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAll, search, get } from "../BooksAPI";
import { Book, responseInterface, updatedBookType } from "./booksModel";
import { update } from "../BooksAPI";

export const getBooksData = createAsyncThunk(
  "get/books",
  async (): Promise<[Book]> => {
    const response = await getAll();
    return response;
  }
);

export const getBook = createAsyncThunk(
  "get/book",
  async (bookId: string): Promise<Book> => {
    const response = await get(bookId);
    return response;
  }
);

export const updateBookShelf = createAsyncThunk(
  "update/book",
  async (book: updatedBookType): Promise<responseInterface> => {
    const response: responseInterface = await update(book.book, book.shelf);
    return { ...response, book };
  }
);

export const searchForBooks = createAsyncThunk(
  "search/books",
  async (query: string): Promise<[Book] | []> => {
    console.log(query)
    if (query.trim().length === 0) {
      return [];
    } else {
      const response = await search(query);
      if (response.error) {
        return [];
      }
      return response;
    }
  }
);
