import React from "react";
import { Color } from "../../typing";
import { Circle } from "./Circle";

interface CircleProps {
  colors: Color[];
  onChangeColor: (position: number) => void | undefined;
}
export const CircleRow = (props: CircleProps) => {
  const { colors, onChangeColor } = props;

  const circles = colors.map((color, i) => {
    return (
      <Circle
        color={color}
        position={i}
        onChangeColor={onChangeColor}
        key={i}
      />
    );
  });

  return <div className="circles"> {circles} </div>;
};