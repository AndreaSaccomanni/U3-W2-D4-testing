import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";
import BookList from "../components/BookList";
import scifiBooks from "../books/scifi.json";
import CommentArea from "../components/CommentArea";

describe("Welcome Component", () => {
  it("mount the h1 correctly", () => {
    render(<Welcome />);
    const h1 = screen.getByText(/Welcome to Book Shop!/);
    expect(h1).toBeInTheDocument();
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
    expect(cards).toHaveLength(scifiBooks.length);
  });
});

describe("CommentArea Component", () => {
  it("mount CommentArea correctly", () => {
    render(<CommentArea />);
    const comments = screen.getAllByTestId("comment");
    expect(comments.length).toBeGreaterThan(0);
  });
});
