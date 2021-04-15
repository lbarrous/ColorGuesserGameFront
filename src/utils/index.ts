import { NUMBER_OF_COLORS } from "../constants"
import { Color, Hint } from "../typing"

export const getInitialArrayOfColors = (): Color[] => {
    return Array(NUMBER_OF_COLORS)
    .fill(Color.X);
}

export const getInitialArrayOfHints = (): Hint[] => {
    return Array(NUMBER_OF_COLORS)
    .fill(Hint.INCORRECT)
}

export const getColorForChooser = (): Color[] => {
    return [Color.B, Color.G, Color.P, Color.R, Color.Y];
}

export const checkIfRowIsAllowedToCHeck = (colors: Color[]): boolean => {
    return colors.every(color => color !== Color.X);
}