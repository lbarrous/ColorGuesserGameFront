import React from "react";
import { Color } from "../../typing";
import { Circle } from "./Circle";
import { StyledCircleRow } from "./styles";

interface CircleProps {
  colors: Color[];
  onChangeColor: (color: Color, position: number) => void | undefined;
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

  return <StyledCircleRow> {circles} </StyledCircleRow>;
};
