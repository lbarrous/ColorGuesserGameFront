import React from "react";
import { Color } from "../../typing";
import { CheckButton } from "../checkButton/CheckButton";
import { CircleRow } from "../circle/CircleRow";
import { Hints } from "../hints/Hints";
import { StyledGuessBoardRow } from "./styles";

interface GuessBoardRowProps {
  colors: Color[];
  hints: number;
  onChangeColor?: (color: Color, position: number) => void;
  onCheckGuess?: () => void;
  isActive: boolean;
  allowedToCheck: boolean;
}

export const GuessBoardRow = (props: GuessBoardRowProps) => {
  const {
    allowedToCheck,
    colors,
    hints,
    isActive,
    onChangeColor,
    onCheckGuess,
  } = props;

  return (
    <StyledGuessBoardRow isActive={isActive} data-testid="guessBoardRow">
      <CircleRow colors={colors} onChangeColor={onChangeColor || (() => {})} />
      <CheckButton
        allowedToCheck={allowedToCheck}
        onCheckColors={onCheckGuess || (() => {})}
      />
      <Hints hints={hints} />
    </StyledGuessBoardRow>
  );
};
