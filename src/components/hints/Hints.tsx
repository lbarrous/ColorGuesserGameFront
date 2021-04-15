import React from "react";
import { NUMBER_OF_COLORS } from "../../constants";
import { Hint } from "../../typing";
import { CheckBox } from "./CheckBox";

interface HintsProps {
  hints: number;
}

export const Hints = (props: HintsProps) => {
  const { hints } = props;
  console.log("Hints -> hints", hints);

  const hintsArray = Array(hints)
    .fill(Hint.CORRECT)
    .concat(Array(NUMBER_OF_COLORS - hints).fill(Hint.INCORRECT));
  console.log("Hints -> hintsArray", hintsArray);
  return (
    <div className="hints">
      {hintsArray.map((hint, i) => {
        return <CheckBox hint={hint} key={i} />;
      })}
    </div>
  );
};
