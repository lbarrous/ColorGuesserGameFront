import { render, screen } from "@testing-library/react";
import React from "react";
import { Game } from "./Game";

describe("Game component", () => {
  it("shows the game board", () => {
    render(
      <Game
        gameId="1"
        maxAttempts={5}
        newGame={jest.fn()}
        setError={jest.fn()}
        setIsLoading={jest.fn()}
      />
    );
    expect(screen.getByTestId("game-board")).toBeInTheDocument();
  });
});
