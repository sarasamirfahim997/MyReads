import React from "react";
import * as reactRedux from "react-redux";
import { getBooksData } from "../redux/helper";
import BooksList from "../components/BooksList";
import { renderWithContext } from "./renderWrapper";
import { screen } from "@testing-library/react";
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
describe("BooksList Component is rendered", () => {
  beforeEach(() => {
    //useDispatchMock.mockImplementation(() => () => {});
    //useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    //useDispatchMock.mockClear();
    //useSelectorMock.mockClear();
  });
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;
  const mockStore = {
    data: [],
  };
  test("renders", () => {
    renderWithContext(<BooksList />);
    const MockData = [];
    expect(screen.getByTestId("loaderComponentId")).toBeInTheDocument();
  });
});
