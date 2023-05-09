import React from "react";
import BooksList from "../components/BooksList";
import { renderWithContext } from "./renderWrapper";
import { screen } from "@testing-library/react";

describe("BooksList Component is rendered", () => {
  test("renders", () => {
    renderWithContext(<BooksList />);
    expect(screen.getByTestId("loaderComponentId")).toBeInTheDocument();
  });
});
