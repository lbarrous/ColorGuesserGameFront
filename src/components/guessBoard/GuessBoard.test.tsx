import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved
} from "@testing-library/react";
import React from "react";
import { GuessBoard } from "./GuessBoard";

describe("GuessBoard component", () => {
  it("shows the active row", () => {
    render(<GuessBoard activeRowColors={[]} onCheckGuess={jest.fn()} onChangeColor={jest.fn()} maxAttempts={5} gameFinished={false} guesses={[]} />);
    expect(screen.getByTestId("circle")).toBeInTheDocument();
  });
});
