import React from "react";
import { renderWithContext } from "./renderWrapper";
import { screen } from "@testing-library/react";
import BookDetail from "../pages/BookDetail";

describe("BookDetails Component is rendered", () => {
  test("render without params, using link without id for example", () => {
    renderWithContext(<BookDetail />);
    expect(screen.getByText("No book details To Display")).toBeTruthy();
  });
});
