import React from "react";
import { renderWithProviders } from "./renderWrapper";
import { screen } from "@testing-library/react";
import BookDetail from "../pages/BookDetail";
import { Book, Shelves } from "../redux/booksModel";

describe("BookDetails Component is rendered", () => {
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
  test("render without params, using link without id for example", () => {
    renderWithProviders(<BookDetail />);
    expect(screen.getByText("No book details To Display")).toBeTruthy();
  });

});
