import React, { useCallback, useState } from "react";
import GuessAPI from "../../api/GuessAPI";
import { Color, GameResult, Guess } from "../../typing";
import {
  checkIfRowIsAllowedToCHeck,
  getColorForChooser,
  getInitialArrayOfColors,
  getInitialArrayOfHints
} from "../../utils";
import { ColorChooser } from "../colorChooser/ColorChoser";
import { GuessBoard } from "../guessBoard/GuessBoard";
import { Solution } from "../solution/Solution";

interface GameProps {
  maxAttempts: number;
  gameId: string;
}

export const Game = (props: GameProps) => {
  const { maxAttempts, gameId } = props;
  const [activeRow, setActiveRow] = useState<Color[]>(
    getInitialArrayOfColors()
  );
  const [activeColor, setActiveColor] = useState<Color>(Color.B);
  const [gameFinished, setGameFinished] = useState<boolean>(false);
  const [hasWon, setHasWon] = useState<boolean>(false);
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [attemptsLeft, setAttemptsLeft] = useState<number>(maxAttempts);

  const onColorChooserChange = useCallback(
    (color: Color) => {
      setActiveColor(color);
    },
    []
  );

  const onActiveRowColorChange = useCallback(
    (position: number) => {
      const newActiveRow = [
        ...activeRow.slice(0, position),
        activeColor,
        ...activeRow.slice(position + 1)
      ];
      setActiveRow(newActiveRow);
    },
    [activeRow, activeColor]
  );

  const onCheckActiveRow = useCallback(() => {
    GuessAPI.guessCombination({
      gameId: "",
      guess: activeRow
    })
      .then(response => {
        setGuesses([
          ...guesses,
          {
            colorCombination: activeRow,
            hint: getInitialArrayOfHints()
          }
        ]);
        if (response.data.hits) {
          setAttemptsLeft(response.data.hits);
        } else {
          setGameFinished(true);
          setHasWon(response.data === GameResult.WON);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [activeRow, guesses]);

  return (
    <div className="game-container">
      <h3>{attemptsLeft} Attempts left</h3>
      <ColorChooser
        colors={getColorForChooser()}
        activeColor={activeColor}
        onColorSelected={onColorChooserChange}
      />
      <GuessBoard
        guesses={guesses}
        maxAttempts={maxAttempts}
        onChangeColor={onActiveRowColorChange}
        onCheckGuess={onCheckActiveRow}
        activeRowColors={activeRow}
        isAllowedToCheck={checkIfRowIsAllowedToCHeck(activeRow)}
      />
      {gameFinished && (
        <Solution
          hasWon={hasWon}
          lastGuess={guesses.slice(-1)[0]}
          newGame={() => {}}
        />
      )}
    </div>
  );
};
