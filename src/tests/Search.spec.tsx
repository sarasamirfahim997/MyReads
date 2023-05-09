import React from "react";
import Search from "../pages/Search";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import { renderWithContext } from "./renderWrapper";

describe("test", () => {
  test("renders", () => {
    renderWithContext(<Search />);
  });
});
