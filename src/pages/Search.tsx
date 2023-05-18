import React, { ReactElement, useEffect, useState } from "react";
import classes from "./Search.module.css";
import { useAppDispatch, useAppSelector } from "../redux/store/store";
import { Book, BooksState, Shelves } from "../redux/booksModel";
import BookItem from "../components/BookItem";
import { getBooksData, searchForBooks } from "../redux/helper";

const Search = () => {
  const [queryInput, setQueryInput] = useState<string>("");
  const { searchResults } = useAppSelector<BooksState>((state) => state.books);
  const [dataAfterModification, setDataAfterModification] = useState<Book[]>(
    []
  );
  const { data } = useAppSelector<BooksState>((state) => state.books);
  const dispatch = useAppDispatch();
  const noQuery: ReactElement = <p>Enter a valid book title...</p>;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryInput(event.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (queryInput.trim().length !== 0) {
        dispatch(searchForBooks(queryInput));
      } else {
        setDataAfterModification([]);
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch, queryInput]);

  useEffect(() => {
    const modifiedBooks = searchResults.map(
      (searchBook: Book) =>
        data.find((book) => book.id === searchBook?.id) || {
          ...searchBook,
          shelf: Shelves.none,
        }
    );
    setDataAfterModification(() => modifiedBooks);
  }, [searchResults]);

  useEffect(() => {
    dispatch(getBooksData());
  }, [dispatch]);

  return (
    <div className={classes.search}>
      <div className={classes.input}>
        <input
          value={queryInput}
          onChange={handleSearch}
          placeholder="ex. react"
        />
      </div>
      <div className={classes["search-books"]}>
        {!dataAfterModification ||
        dataAfterModification.length === 0 ||
        queryInput.trim().length === 0
          ? noQuery
          : dataAfterModification.map((book) => (
              <BookItem book={book} key={book.id} />
            ))}
      </div>
    </div>
  );
};

export default Search;
