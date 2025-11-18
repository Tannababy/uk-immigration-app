import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./components/Header";
import exp from "constants";

describe("Header Component", () => {
  test("renders the correct app title", () => {
    render(<Header />);

    const element = screen.getByTestId("title");

      expect(element).toHaveTextContent("UK Immigration Calculator");
      expect(element).toBeInTheDocument();
  });
});
