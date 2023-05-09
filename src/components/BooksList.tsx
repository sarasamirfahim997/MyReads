import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store/store";
import { getBooksData } from "../redux/helper";
import { Book, BooksState, SHELVES } from "../redux/booksModel";
import BookShelf from "./BookShelf";
import classes from "./BooksList.module.css";
import Loader from "../layout/Loader";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";

const BooksList = () => {
  const { data } = useAppSelector<BooksState>((state) => state.books);
  const dispatch = useAppDispatch();

  const renderShelf = () => {
    dispatch(getBooksData());
  };
  useEffect(() => {
    dispatch(getBooksData());
  }, [dispatch]);
  return (
    <div className={classes.booksList}>
      {data.length === 0 || !data ? (
        <Loader />
      ) : (
        SHELVES.map((shelf) => {
          const shelfBooks = data.filter(
            (book: Book) => book.shelf === shelf.id
          );
          return (
            <BookShelf
              key={shelf.id}
              shelf={shelf.id}
              books={shelfBooks}
              title={shelf.title}
              onRenderShelf={renderShelf}
            />
          );
        })
      )}
      <Link
        to="/search"
        //state={{ shelfBooks: shelfBooks }}
        className={classes["search-button"]}
      >
        <div>
          <ImSearch fontSize="larger" />
        </div>
      </Link>
    </div>
  );
};

export default BooksList;
