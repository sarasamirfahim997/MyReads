import React from "react";
import Search from "../pages/Search";
import { renderWithContext } from "./renderWrapper";

describe("test", () => {
  test("renders", () => {
    renderWithContext(<Search />);
  });
});
