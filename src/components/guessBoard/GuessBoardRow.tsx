import React from "react";
import { Color, Hint } from "../../typing";
import { CheckButton } from "../checkButton/CheckButton";
import { CircleRow } from "../circle/CircleRow";
import { Hints } from "../hints/Hints";

interface GuessBoardRowProps {
  colors: Color[];
  hints: Hint[];
  onChangeColor?: (position: number) => void;
  onCheckGuess?: () => void;
  isActive: boolean;
  allowedToCheck: boolean;
}

export const GuessBoardRow = (props: GuessBoardRowProps) => {
  const { allowedToCheck, colors, hints, isActive, onChangeColor, onCheckGuess } = props;

  return (
    <div className={`row ${isActive && "active"}`}>
      <CircleRow
        colors={colors}
        onChangeColor={onChangeColor || (() => {})}
      />
      <CheckButton allowedToCheck={allowedToCheck} onCheckColors={onCheckGuess || (() => {})} />
      <Hints hints={hints} />
    </div>
  );
};
