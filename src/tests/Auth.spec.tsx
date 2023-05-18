import { screen} from "@testing-library/react";
import { renderWithProviders } from "./renderWrapper";
import Auth from "../pages/Auth";



describe("Auth rendering", () => {
    test("rendering", () => {
      renderWithProviders(<Auth />);
      expect(screen.getByTestId("auth")).toBeTruthy();
    });
    test("form input",()=>{
      renderWithProviders(<Auth />);
      expect(screen.getByLabelText('Email')).toBeTruthy();
      
    })
  });