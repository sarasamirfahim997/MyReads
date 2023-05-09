import Header from "../layout/Header";
import { screen } from "@testing-library/react";
import { renderWithContext } from "./renderWrapper";

describe("header rendering", () => {
  test("login", () => {
    renderWithContext(<Header />);
    expect(screen.getByText("Login")).toBeTruthy();
    expect(screen.getByText("Home")).toBeTruthy();
  });
});
