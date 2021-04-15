import React from "react";
import { Hint } from "../../typing";
import { CheckBox } from "./CheckBox";

interface HintsProps {
  hints: Hint[];
}

export const Hints = (props: HintsProps) => {
  const { hints } = props;

  return (
    <div className="hints">
      {hints.map((hint, i) => {
        return <CheckBox hint={hint} key={i} />;
      })}
    </div>
  );
};
