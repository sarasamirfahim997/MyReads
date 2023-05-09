import React, { useState } from "react";
import classes from "./BookItem.module.css";
import { useAppDispatch, useAppSelector } from "../redux/store/store";
import { BooksState } from "../redux/booksModel";
import { Book } from "../redux/booksModel";
import { updateBookShelf } from "../redux/helper";
import { Link } from "react-router-dom";
import dummyImg from "../assets/img-dummy.jpg";

interface shelfProps {
  book: Book;
}

const BookItem: React.FC<shelfProps> = (props) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    props.book.shelf ? props.book.shelf : "none"
  );
  const { data } = useAppSelector<BooksState>((state) => state.books);
  const dispatch = useAppDispatch();
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    dispatch(updateBookShelf({ book: props.book, shelf: event.target.value }));
  };

  const dragStartHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.setData("text", props.book.id);
  };
  return (
    <>
      {data.length === 0 || !data ? (
        <p data-testid="no-book">"No book details To Display"</p>
      ) : (
        <div
          className={classes.bookItem}
          draggable="true"
          onDrag={dragStartHandler}
          data-testid={props.book.id}
        >
          <Link to={`/books/${props.book.id}/details`}>
            <div className={classes["book-cover"]}>
              <img
                src={
                  props.book.imageLinks
                    ? props.book.imageLinks.thumbnail
                    : dummyImg
                }
                alt=""
              />
            </div>
            <div className={classes["book-title"]}>{props.book.title}</div>
            <div className={classes["book-authors"]}>
              By: {props.book.authors && props.book.authors.join(", ")}
            </div>
          </Link>
          <div className={classes["book-shelf-changer"]}>
            <select
              onChange={selectChange}
              defaultValue={selectedOption}
              data-testid="SelectField"
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default BookItem;
