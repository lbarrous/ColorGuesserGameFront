import React, { useCallback, useState } from "react";
import GuessAPI from "../../api/GuessAPI";
import { NUMBER_OF_COLORS } from "../../constants";
import { Color, GameResult, Guess } from "../../typing";
import {
  checkIfRowIsAllowedToCHeck,
  getInitialArrayOfColors,
  selectColorOnActiveRow,
} from "../../utils";
import { GuessBoard } from "../guessBoard/GuessBoard";
import { Solution } from "../solution/Solution";

interface GameProps {
  maxAttempts: number;
  gameId: string;
  setIsLoading: (value: boolean) => void;
  newGame: () => void;
  setError: (value: boolean) => void;
}

export const Game = (props: GameProps) => {
  const { maxAttempts, gameId, setIsLoading, newGame, setError } = props;

  const [activeRow, setActiveRow] = useState<Color[]>(
    getInitialArrayOfColors()
  );
  const [gameFinished, setGameFinished] = useState<boolean>(false);
  const [hasWon, setHasWon] = useState<boolean>(false);
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [guessNumber, setGuessNumber] = useState<number>(0);

  const restartGame = () => {
    setGameFinished(false);
    setHasWon(false);
    setGuesses([]);
    setGuessNumber(0);
    setActiveRow(getInitialArrayOfColors());
  };

  const onActiveRowColorChange = useCallback(
    (color: Color, position: number) => {
      setActiveRow(selectColorOnActiveRow(activeRow, color, position));
    },
    [activeRow]
  );

  const onCheckActiveRow = useCallback(() => {
    setIsLoading(true);
    GuessAPI.guessCombination({
      gameId: gameId,
      guess: activeRow,
    })
      .then((response) => {
        setIsLoading(false);
        if (response.data.hits) {
          setGuesses(
            guesses.concat([
              {
                colorCombination: activeRow,
                hints: response.data.correctColors,
              },
            ])
          );

          setGuessNumber(response.data.hits);
          setActiveRow(getInitialArrayOfColors());
        } else {
          setGuesses(
            guesses.concat([
              {
                colorCombination: activeRow,
                hints: response.data === GameResult.WON ? NUMBER_OF_COLORS : 0,
              },
            ])
          );

          setGameFinished(true);
          setHasWon(response.data === GameResult.WON);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setError(true);
        console.log(error);
      });
  }, [activeRow, guesses, gameId, setError, setIsLoading]);

  return (
    <div className="game-board" data-testid="game-board">
      <h3>
        {!gameFinished
          ? gameId && `${maxAttempts - guessNumber} Attempts left`
          : hasWon
          ? "You Won!!"
          : "You Lost :("}
      </h3>
      <GuessBoard
        guesses={guesses}
        maxAttempts={maxAttempts}
        onChangeColor={onActiveRowColorChange}
        onCheckGuess={onCheckActiveRow}
        activeRowColors={activeRow}
        gameFinished={gameFinished}
        isAllowedToCheck={
          checkIfRowIsAllowedToCHeck(activeRow) && !gameFinished
        }
      />
      {gameFinished && (
        <Solution
          hasWon={hasWon}
          lastGuess={guesses.slice(-1)[0]}
          newGame={() => {
            newGame();
            restartGame();
          }}
        />
      )}
    </div>
  );
};
