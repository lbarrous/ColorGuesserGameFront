import React from "react";
import { Color, Guess } from "../../typing";
import { GuessBoardRow } from "./GuessBoardRow";
import { StyledGGuessBoard } from "./styles";

interface GuessBoardProps {
  maxAttempts: number;
  guesses: Guess[];
  onChangeColor: (color: Color, position: number) => void;
  onCheckGuess: () => void;
  activeRowColors: Color[];
  isAllowedToCheck: boolean;
  gameFinished: boolean;
}

export const GuessBoard = (props: GuessBoardProps) => {
  const {
    guesses,
    onChangeColor,
    onCheckGuess,
    activeRowColors,
    isAllowedToCheck,
    gameFinished,
  } = props;

  const getEveryGuess = (guesses: Guess[]): JSX.Element[] => {
    return guesses.map((guess, i) => {
      return (
        <GuessBoardRow
          allowedToCheck={false}
          colors={guess.colorCombination}
          hints={guess.hints}
          isActive={false}
          key={i}
        />
      );
    });
  };

  const getActiveRow = (): JSX.Element | null => {
    return !gameFinished ? (
      <GuessBoardRow
        allowedToCheck={isAllowedToCheck}
        colors={activeRowColors}
        hints={0}
        isActive={true}
        onChangeColor={onChangeColor}
        onCheckGuess={onCheckGuess}
        key="activeRow"
      />
    ) : null;
  };

  const rowsToDisplay = getEveryGuess(guesses).concat(getActiveRow() || []);
  return <StyledGGuessBoard>{rowsToDisplay}</StyledGGuessBoard>;
};
