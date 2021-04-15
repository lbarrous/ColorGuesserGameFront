export enum Color {
    R="red",
    B="blue",
    G="green",
    Y="yellow",
    P="purple",
    X="unselected"
}

export enum Hint {
    TOTALLY_CORRECT="2",
    PARTIALLY_CORRECT="1",
    INCORRECT="0"
}

export interface Guess {
    colorCombination: Color[];
    hint: Hint[];
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
    WON="WON",
    LOST="LOST",
}