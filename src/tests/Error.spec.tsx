import { screen } from "@testing-library/react";
import { renderWithContext } from "./renderWrapper";
import Error from "../pages/Error";

describe("Error rendering", () => {
  test("rendering", () => {
    renderWithContext(<Error />);
    expect(screen.getAllByText("404 | Page Not Found")).toBeTruthy();
  });

});
