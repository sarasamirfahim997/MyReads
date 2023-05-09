import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/store/store";
import { getBook } from "../redux/helper";
import { BooksState } from "../redux/booksModel";
import classes from "./BookDetail.module.css";
import dummyImg from "../assets/img-dummy.jpg";
import { Book } from "../redux/booksModel";
import Loader from "../layout/Loader";

type bookIdParams = {
  bookId: string;
};

const BookDetail = () => {
  const { searchResults, loading } = useAppSelector<BooksState>((state) => state.books);
  const dispatch = useAppDispatch();
  const { bookId } = useParams<bookIdParams>();

  useEffect(() => {
    if (bookId) dispatch(getBook(bookId));
  }, [dispatch, bookId]);
  const book: Book[] = searchResults.filter((book) => book.id === bookId);
  const loadingIsTrue = <Loader />;
  const dataNotAvailable = !searchResults || searchResults.length === 0;
  return (
    <div className={classes["book-detail"]}>
      {loading ? (
        loadingIsTrue
      ) : dataNotAvailable ? (
        "No book details To Display"
      ) : (
        <>
          <div className={classes["book-cover"]}>
            <img
              src={book[0].imageLinks ? book[0].imageLinks.thumbnail : dummyImg}
              alt={book[0].title}
            />
          </div>
          <div className={classes["book-titles"]}>
            <h3>{book[0].title}</h3>
            <h5>{book[0].subtitle}</h5>
          </div>
          <div className="book-detail-desc">
            <p> {book[0].description}</p>
          </div>
          <div className="book-detail-authors">
            <p>By: {book[0].authors.join(" & ")}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default BookDetail;
