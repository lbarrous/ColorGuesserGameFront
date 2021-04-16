import { NUMBER_OF_COLORS } from "../constants";
import { Color } from "../typing";

export const getInitialArrayOfColors = (): Color[] => {
  return Array(NUMBER_OF_COLORS).fill(Color.X);
};

export const getColorForChooser = (): Color[] => {
  return [Color.B, Color.G, Color.P, Color.R, Color.Y];
};

export const checkIfRowIsAllowedToCHeck = (colors: Color[]): boolean => {
  return colors.every((color) => color !== Color.X);
};

export const selectColorOnActiveRow = (
  activeRow: Color[],
  newColor: Color,
  position: number
): Color[] => {
  if (activeRow.includes(newColor)) {
    const indexOfColorAlreadyPresent = activeRow.indexOf(newColor);
    const [initialIndex, lastIndex] =
      indexOfColorAlreadyPresent < position
        ? [indexOfColorAlreadyPresent, position]
        : [position, indexOfColorAlreadyPresent];
    return [
      ...activeRow.slice(0, initialIndex),
      indexOfColorAlreadyPresent < position ? Color.X : newColor,
      ...activeRow.slice(initialIndex + 1, lastIndex),
      indexOfColorAlreadyPresent < position ? newColor : Color.X,
      ...activeRow.slice(lastIndex + 1),
    ];
  } else {
    return [
      ...activeRow.slice(0, position),
      newColor,
      ...activeRow.slice(position + 1),
    ];
  }
};
