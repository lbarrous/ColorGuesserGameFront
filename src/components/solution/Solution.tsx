import React from "react";
import { Guess } from "../../typing";

interface SolutionProps {
  lastGuess: Guess;
  hasWon: boolean;
  newGame: () => void;
}

export const Solution = (props: SolutionProps) => {
  const { hasWon, lastGuess, newGame } = props;
  const isHidden = hasWon ? "" : " hidden";
  const winnerColors = lastGuess.colorCombination.map((combination, i) => {
    return <div className={"color-holder " + combination} key={i}></div>;
  });

  return (
    <div className="solution colors">
      <div className={isHidden}>
        <p>Solution:</p>
        {winnerColors}
      </div>
      <div>
        <a onClick={newGame}> Play Again?</a>
      </div>
    </div>
  );
};
