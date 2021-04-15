import { render, screen } from "@testing-library/react";
import React from "react";
import { GuessBoard } from "./GuessBoard";

describe("GuessBoard component", () => {
  it("shows the active row", async () => {
    render(
      <GuessBoard
        activeRowColors={[]}
        onCheckGuess={jest.fn()}
        onChangeColor={jest.fn()}
        maxAttempts={5}
        gameFinished={false}
        guesses={[]}
        isAllowedToCheck={false}
      />
    );
    const items = await screen.findAllByTestId("guessBoardRow");
    expect(items).toHaveLength(1);
  });
  it("shows the previous guesses", async () => {
    render(
      <GuessBoard
        activeRowColors={[]}
        onCheckGuess={jest.fn()}
        onChangeColor={jest.fn()}
        maxAttempts={5}
        gameFinished={false}
        guesses={[
          { colorCombination: [], hints: 0 },
          { colorCombination: [], hints: 0 },
        ]}
        isAllowedToCheck={false}
      />
    );
    const items = await screen.findAllByTestId("guessBoardRow");
    expect(items).toHaveLength(3);
  });
});
