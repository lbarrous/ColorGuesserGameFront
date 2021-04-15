import { render, screen } from "@testing-library/react";
import React from "react";
import { Color } from "../../typing";
import { Solution } from "./Solution";

describe("Solution component", () => {
  it("shows the solution", async () => {
    render(
      <Solution
        hasWon={true}
        lastGuess={{
          colorCombination: [Color.B, Color.G, Color.P, Color.R, Color.Y],
          hints: 5,
        }}
        newGame={jest.fn()}
      />
    );
    const circles = await screen.getAllByTestId("solution-color");
    expect(circles).toHaveLength(5);
  });
});
