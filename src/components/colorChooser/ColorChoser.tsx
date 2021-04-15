import React from "react";
import { Color } from "../../typing";
import { getColorForChooser } from "../../utils";

interface ColorChooserProps {
  alreadySelectedColors: Color[];
  position: number;
  onColorSelected: (color: Color, position: number) => void;
}

export const ColorChooser = (props: ColorChooserProps) => {
  const { position, onColorSelected, alreadySelectedColors } = props;
  const allColors = getColorForChooser().map((color: Color) => {
      return (
        <div
          className={"color-holder " + color}
          key={color}
          onClick={() => onColorSelected(color, position)}
        ></div>
      );
    });

  return <div className="colors">{allColors}</div>;
};
