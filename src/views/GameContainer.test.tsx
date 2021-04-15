import { render, screen } from "@testing-library/react";
import React from "react";
import GameContainer from "./GameContainer";

describe("GameContainer component", () => {
  it("shows the game container", () => {
    render(<GameContainer />);
    expect(screen.getByTestId("game-container")).toBeInTheDocument();
  });
});
