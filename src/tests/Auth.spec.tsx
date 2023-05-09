import { screen} from "@testing-library/react";
import { renderWithContext } from "./renderWrapper";
import Auth from "../pages/Auth";



describe("Auth rendering", () => {
    test("rendering", () => {
      renderWithContext(<Auth />);
      expect(screen.getByTestId("auth")).toBeTruthy();
    });
    test("form input",()=>{
      renderWithContext(<Auth />);
      expect(screen.getByLabelText('Email')).toBeTruthy();
      
    })
  });