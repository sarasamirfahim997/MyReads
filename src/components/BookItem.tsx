import React, { useEffect, useState } from "react";
import classes from "./BookItem.module.css";
import { useAppDispatch, useAppSelector } from "../redux/store/store";
import { BooksState, Shelves } from "../redux/booksModel";
import { Book } from "../redux/booksModel";
import { updateBookShelf } from "../redux/helper";
import { Link } from "react-router-dom";
import dummyImg from "../assets/img-dummy.jpg";

interface shelfProps {
  book: Book;
}

const BookItem: React.FC<shelfProps> = (props) => {
  const { shelf, id, imageLinks, title, authors } = props.book;
  const [selectedOption, setSelectedOption] = useState<string>(
    shelf ? shelf : "none"
  );
  const { data } = useAppSelector<BooksState>((state) => state.books);
  const dispatch = useAppDispatch();
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    dispatch(
      updateBookShelf({
        book: props.book,
        shelf: Shelves[event.target.value as keyof typeof Shelves],
      })
    );
  };

  const dragStartHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.setData("text", id);
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
          data-testid="to-book-detail"
        >
          <Link to={`/books/${id}/details`} data-testid="to-book-detail">
            <div className={classes["book-cover"]}>
              <img src={imageLinks ? imageLinks.thumbnail : dummyImg} alt="" />
            </div>
            <div className={classes["book-title"]}>{title}</div>
            <div className={classes["book-authors"]}>
              By: {authors && authors.join(", ")}
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
              <option value={Shelves.currentlyReading}>
                Currently Reading
              </option>
              <option value={Shelves.wantToRead}>Want to Read</option>
              <option value={Shelves.read}>Read</option>
              <option value={Shelves.none}>None</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default BookItem;
