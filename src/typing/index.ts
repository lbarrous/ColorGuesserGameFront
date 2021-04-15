export enum Color {
  R = "red",
  B = "blue",
  G = "green",
  Y = "yellow",
  P = "purple",
  X = "unselected"
}

export enum Hint {
  CORRECT = "correct",
  INCORRECT = "incorrect"
}

export interface Guess {
  colorCombination: Color[];
  hints: number;
}

export interface APIRequesObject {
  maxAttempts?: number;
  gameId?: string;
  guess?: string[];
}

export interface APIResponseObject {
  gameId?: string;
}

export enum GameResult {
  WON = "WON",
  LOST = "LOST"
}
