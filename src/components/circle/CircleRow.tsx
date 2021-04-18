import React from "react";
import { Color } from "../../typing";
import { Circle } from "./Circle";
import { StyledCircleRow } from "./styles";

interface CircleProps {
  colors: Color[];
  isActive: boolean;
  onChangeColor: (color: Color, position: number) => void | undefined;
}
export const CircleRow = (props: CircleProps) => {
  const { colors, onChangeColor, isActive } = props;

  const circles = colors.map((color, i) => {
    return (
      <Circle
        isFromActiveRow={isActive}
        color={color}
        position={i}
        onChangeColor={onChangeColor}
        key={i}
      />
    );
  });

  return <StyledCircleRow> {circles} </StyledCircleRow>;
};
