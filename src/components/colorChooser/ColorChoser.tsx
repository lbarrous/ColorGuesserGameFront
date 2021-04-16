import React from "react";
import { Color } from "../../typing";
import { getColorForChooser } from "../../utils";
import { StyledColor } from "./styles";

interface ColorChooserProps {
  position: number;
  onColorSelected: (color: Color, position: number) => void;
}

export const ColorChooser = (props: ColorChooserProps) => {
  const { position, onColorSelected } = props;
  const allColors = getColorForChooser().map((color: Color) => {
    return (
      <StyledColor
        color={color}
        data-testid={`color-${color}`}
        className={"color-holder " + color}
        key={color}
        onClick={() => onColorSelected(color, position)}
      ></StyledColor>
    );
  });

  return <div data-testid="colorChooser">{allColors}</div>;
};
