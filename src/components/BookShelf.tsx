import React from "react";
import BookItem from "./BookItem";
import classes from "./BookShelf.module.css";
import { Book, Shelves } from "../redux/booksModel";
import { useAppDispatch, useAppSelector } from "../redux/store/store";
import { updateBookShelf, getBook } from "../redux/helper";

interface shelfProps {
  shelf: Shelves;
  books: Book[];
  title: string;
  onRenderShelf: () => void;
}

const BookShelf: React.FC<shelfProps> = (props) => {
  const { books, title, shelf, onRenderShelf } = props;
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.books);
  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const bookId = event.dataTransfer.getData("text");
    const { shelf } = props;
    dispatch(getBook(bookId.split("/")[4]));
    const book: Book[] = data.filter(
      (book) => book.id === bookId.split("/")[4]
    );
    if (book) {
      dispatch(updateBookShelf({ book: book[0], shelf }));
      setTimeout(() => {
        onRenderShelf();
      }, 350);
    }
  };

  return (
    <div className={classes.bookshelf}>
      <div
        className={classes.bookCard}
        onDragOver={allowDrop}
        onDrop={dropHandler}
        data-testid={shelf}
      >
        <h2>{title}</h2>
        {books.length === 0 && !loading ? (
          <p>No books on this shelf, try adding new ones</p>
        ) : (
          books.map((book) => <BookItem book={book} key={book.id} />)
        )}
      </div>
    </div>
  );
};

export default BookShelf;
