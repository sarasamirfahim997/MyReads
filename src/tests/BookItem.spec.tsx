import React from "react";
import BookItem from "../components/BookItem";
import { screen } from "@testing-library/react";
import { renderWithContext } from "./renderWrapper";
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
    const element = screen.getAllByTestId("no-book");
    expect(element).toBeTruthy();
  });
});
