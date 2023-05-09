import { screen } from "@testing-library/react";
import { renderWithContext } from "./renderWrapper";
import Header from "../layout/Header";
import Root from "../layout/Root";

describe("Root rendering", () => {
  test("rendering", () => {
    renderWithContext(<Root />);
    renderWithContext(<Header />);
    expect(screen.getByText("Login")).toBeTruthy();
    expect(screen.getByText("Home")).toBeTruthy();
  });
});
