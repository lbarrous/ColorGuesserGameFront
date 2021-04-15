import React from "react";
import { Color, Guess } from "../../typing";
import { GuessBoardRow } from "./GuessBoardRow";
import { getInitialArrayOfHints } from "../../utils";

interface GuessBoardProps {
  maxAttempts: number;
  guesses: Guess[];
  onChangeColor: (position: number) => void;
  onCheckGuess: () => void;
  activeRowColors: Color[];
  isAllowedToCheck: boolean;
}

export const GuessBoard = (props: GuessBoardProps) => {
  const { guesses, onChangeColor, onCheckGuess, activeRowColors, isAllowedToCheck } = props;

  const getEveryGuess = (guesses: Guess[]): JSX.Element[] => {
    return guesses.map((guess, i) => {
      return (
        <GuessBoardRow
          allowedToCheck={false}
          colors={guess.colorCombination}
          hints={guess.hint}
          isActive={false}
          key={i}
        />
      );
    });
  };
  
  const getActiveRow = (): JSX.Element => {
    return (
      <GuessBoardRow
        allowedToCheck={isAllowedToCheck}
        colors={activeRowColors}
        hints={getInitialArrayOfHints()}
        isActive={true}
        onChangeColor={onChangeColor}
        onCheckGuess={onCheckGuess}
        key="activeRow"
      />
    );
  };

  const rowsToDisplay = getEveryGuess(guesses).concat(getActiveRow());
  return <div className="board">{rowsToDisplay}</div>;
};