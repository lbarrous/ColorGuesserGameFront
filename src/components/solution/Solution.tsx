import React from "react";
import { Guess } from "../../typing";
import {
  StyledNewGameLink,
  StyledSolutionCircle,
  StyledSolutionContainer,
} from "./styles";

interface SolutionProps {
  lastGuess: Guess;
  hasWon: boolean;
  newGame: () => void;
}

export const Solution = (props: SolutionProps) => {
  const { hasWon, lastGuess, newGame } = props;
  const winnerColors = lastGuess.colorCombination.map((combination, i) => {
    return (
      <StyledSolutionCircle
        color={combination}
        key={i}
        data-testid="solution-color"
      ></StyledSolutionCircle>
    );
  });

  return (
    <div data-testid="solution-container">
      <StyledSolutionContainer hidden={!hasWon}>
        <p>Solution:</p>
        {winnerColors}
      </StyledSolutionContainer>
      <div>
        <StyledNewGameLink onClick={newGame}> Play Again?</StyledNewGameLink>
      </div>
    </div>
  );
};
