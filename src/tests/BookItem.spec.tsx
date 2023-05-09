import React from "react";
import BookItem from "../components/BookItem";
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import { Book } from "../redux/booksModel";

describe("BooksItem Component is rendered", () => {
  const book: Book = {
    id: "",
    authors: [],
    title: "",
    description: "",
    imageLinks: {
      smallThumbnail: "",
      thumbnail: "",
    },
    shelf: "",
    subtitle: "",
  };
  renderWithContext(<BookItem book={book} />);
  /*   test("renders", () => {
    const book: Book = {
      id: "",
      authors: [],
      title: "",
      description: "",
      imageLinks: {
        smallThumbnail: "",
        thumbnail: "",
      },
      shelf: "",
      subtitle: "",
    };
    renderWithContext(<BookItem book={book} />);
  }); */

  test("changing shelf of a book", () => {
    const book: Book = {
      id: "274fCwAAQBAJ",
      authors: ["Bonnie Eisenman"],
      title: "Learning React Native",
      description: "",
      imageLinks: {
        smallThumbnail: "",
        thumbnail: "",
      },
      shelf: "currentlyReading",
      subtitle: "Building Native Mobile Apps with JavaScript",
    };
    renderWithContext(<BookItem book={book} />);
    const field = screen.queryByTestId("SelectField") as HTMLElement;
    expect(field).toHaveValue(book.shelf);
    fireEvent.change(field, {
      target: { value: "read" },
    });
    expect(book.shelf).toHaveValue("read");
  });
});

function renderWithContext(element: React.ReactElement) {
  render(
    <Provider store={store}>
      <Router>{element}</Router>
    </Provider>
  );
}
