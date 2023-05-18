import { screen } from "@testing-library/react";
import { renderWithProviders } from "./renderWrapper";
import Header from "../layout/Header";
import Root from "../layout/Root";

describe("Root rendering", () => {
  test("rendering", () => {
    renderWithProviders(<Root />);
    renderWithProviders(<Header />);
    expect(screen.getByText("Login")).toBeTruthy();
    expect(screen.getByText("Home")).toBeTruthy();
  });
});
