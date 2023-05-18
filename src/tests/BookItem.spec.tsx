import React from "react";
import BookItem from "../components/BookItem";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "./renderWrapper";
import { Book, Shelves } from "../redux/booksModel";

describe("BooksItem Component is rendered", () => {
  const mockedUsedNavigate = jest.fn();

  jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as any),

    useNavigate: () => mockedUsedNavigate,
  }));

  const book: Book = {
    id: "274fCwAAQBAJ",
    authors: ["Bonnie Eisenman"],
    title: "Learning React Native",
    description: "",
    imageLinks: {
      smallThumbnail: "",
      thumbnail: "",
    },
    shelf: Shelves.currentlyReading,
    subtitle: "Building Native Mobile Apps with JavaScript",
  };
  const emptyBook: Book = {
    id: "",
    authors: [""],
    title: "",
    description: "",
    imageLinks: {
      smallThumbnail: "",
      thumbnail: "",
    },
    shelf: Shelves.none,
    subtitle: "",
  };

  test("component rendered", () => {
    renderWithProviders(<BookItem book={book} />);
  });

  test("return no book text when book is not found", () => {
    renderWithProviders(<BookItem book={book} />);
    const element = screen.getAllByTestId("no-book");
    expect(element).toBeTruthy();
  });

  test("etet", () => {
    jest.mock("../components/BookItem", () => {
      return jest.fn().mockImplementation(() => {
        return null;
      });
    });
    expect(BookItem).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "Learning React Native",
      }),
      expect.anything()
    );
  });
});
