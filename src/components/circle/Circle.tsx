import React from "react";
import { Color } from "../../typing";

interface CircleProps {
  color: Color;
  position: number;
  onChangeColor: (position: number) => void;
}

export const Circle = (props: CircleProps) => {
  const { color, position, onChangeColor } = props;
  return (
    <span
      className={"peg " + color}
      onClick={() => onChangeColor(position)}
    ></span>
  );
};
