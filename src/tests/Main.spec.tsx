import { screen } from "@testing-library/react";
import { renderWithContext } from "./renderWrapper";
import Main from "../pages/Main";
import BooksList from "../components/BooksList";
import Loader from "../layout/Loader";




describe("Main rendering", () => {
  test("rendering without any api calls", () => {
    renderWithContext(<Main />);
    renderWithContext(<BooksList />);
    renderWithContext(<Loader />);
    expect(screen.getByTestId("loaderComponentId")).toBeTruthy();
  });
});
