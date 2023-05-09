import { screen} from "@testing-library/react";
import { renderWithContext } from "./renderWrapper";
import Loader from "../layout/Loader";



describe("Loader rendering", () => {
    test("rendering", () => {
      renderWithContext(<Loader />);
      expect(screen.getByTestId("loaderComponentId")).toBeTruthy();
    });
  });