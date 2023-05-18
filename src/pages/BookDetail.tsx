import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/store/store";
import { getBook } from "../redux/helper";
import { BooksState } from "../redux/booksModel";
import classes from "./BookDetail.module.css";
import dummyImg from "../assets/img-dummy.jpg";
import Loader from "../layout/Loader";
import SearchButton from "../layout/SearchButton";

type bookIdParams = {
  bookId: string;
};

const BookDetail = () => {
  const { loading, data } = useAppSelector<BooksState>((state) => state.books);
  const dispatch = useAppDispatch();
  const { bookId } = useParams<bookIdParams>();

  useEffect(() => {
    if (bookId) dispatch(getBook(bookId));
  }, [dispatch, bookId]);

  const loadingIsTrue = <Loader />;
  const dataNotAvailable = !data || data.length === 0;
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
              src={data[0].imageLinks ? data[0].imageLinks.thumbnail : dummyImg}
              alt={data[0].title}
            />
          </div>
          <div className={classes["book-titles"]}>
            <h3>{data[0].title}</h3>
            <h5>{data[0].subtitle}</h5>
          </div>
          <div className="book-detail-desc">
            <p> {data[0].description}</p>
          </div>
          <div className="book-detail-authors">
            <p>By: {data[0].authors.join(" & ")}</p>
          </div>

          <SearchButton />
        </>
      )}
    </div>
  );
};

export default BookDetail;
