import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Welcome Component", () => {
  it("mount the h1 correctly", () => {
    render(<Welcome />);
    const heading = screen.getByText(/Welcome to Book Shop!/);
    expect(heading).toBeInTheDocument();
    const p = screen.getByText(/Your one-stop destination for amazing books./);
    expect(p).toBeInTheDocument();
    const subtitle = screen.getByText(/Find your next favorite story with us!/);
    expect(subtitle).toBeInTheDocument();
  });
});
