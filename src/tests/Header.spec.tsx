import Header from "../layout/Header";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import { renderWithContext } from "./renderWrapper";
import BooksList from "../components/BooksList";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("header navigate", () => {
  test("login", () => {
    renderWithContext(<Header />);
    renderWithContext(<BooksList/>)
    expect(screen.getByText("Login")).toBeInTheDocument();

  });
  test("navigation", () => {
    renderWithContext(<Header />);
    expect(screen.getByText("Logout")).toBeInTheDocument();
    userEvent.click(screen.getByText("Logout"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("Login");
  });
});
