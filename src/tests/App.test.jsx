import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";
import BookList from "../components/BookList";
import scifiBooks from "../books/scifi.json";

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

describe("BookList Componet", () => {
  it("render the correct number of card", () => {
    render(<BookList />);
    const cards = screen.getAllByTestId("singleCard");
    expect(cards.lenght).toBe(scifiBooks.lenght);
  });
});
