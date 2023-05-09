import Header from "../layout/Header";
import { screen } from "@testing-library/react";
import { renderWithContext } from "./renderWrapper";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
/* const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
})); */

describe("header rendering", () => {
  test("login", () => {
    renderWithContext(<Header />);
    expect(screen.getByText("Login")).toBeTruthy();
    expect(screen.getByText("Home")).toBeTruthy();
  });
  test("navigates to home when home is clicked", () => {
    renderWithContext(<Header />);
      const goHomeLink = screen.queryByText("Home");
      goHomeLink?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
});
