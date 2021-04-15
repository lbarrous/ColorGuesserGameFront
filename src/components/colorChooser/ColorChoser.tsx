import React from "react";
import { Color } from "../../typing";

interface ColorChooserProps {
  colors: Color[];
  activeColor: Color;
  onColorSelected: (color: Color) => void;
}

export const ColorChooser = (props: ColorChooserProps) => {
  const { activeColor, colors, onColorSelected } = props;
  const allColors = colors.map((color: Color) => {
    const active = color === activeColor ? "active" : "";

    return (
      <div
        className={"color-holder " + color + " " + active}
        key={color}
        onClick={() => onColorSelected(color)}
      ></div>
    );
  });

  return <div className="colors">{allColors}</div>;
};
