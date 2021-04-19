import React from "react";
import { Color } from "../../typing";
import { StyledNewGameLink, StyledSolutionCircle } from "./styles";

interface SolutionProps {
  solution: Color[];
  hasWon: boolean;
  newGame: () => void;
}

export const Solution = (props: SolutionProps) => {
  const { hasWon, solution, newGame } = props;
  const winnerColors = solution.map((color, i) => {
    return (
      <StyledSolutionCircle
        color={color}
        key={i}
        data-testid="solution-color"
      ></StyledSolutionCircle>
    );
  });

  return (
    <div data-testid="solution-container">
      <div>
        <p>Solution:</p>
        {winnerColors}
      </div>
      <div>
        <StyledNewGameLink onClick={newGame}> Play Again?</StyledNewGameLink>
      </div>
    </div>
  );
};
