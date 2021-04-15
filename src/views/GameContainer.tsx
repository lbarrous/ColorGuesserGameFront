import { useState } from "react";
import { SpinnerComponent } from "react-element-spinner";
import { NotificationAlert } from "../components/alert/NotificationAlert";
import { Game } from "../components/game/Game";
import { InitialDialog } from "../components/initialDialog/InitialDialog";

export const GameContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(true);
  const [maxAttempts, setMaxAttempts] = useState<number>(0);
  const [gameId, setGameId] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);

  return (
    <div className="GameContainer">
      <NotificationAlert
        isDisplayed={hasError}
        onClose={() => {
          setHasError(false);
          setDialogOpen(true);
        }}
      />
      <SpinnerComponent
        loading={isLoading}
        position="global"
        message="Loading"
      />
      <InitialDialog
        onNewGame={setGameId}
        onClose={() => setDialogOpen(false)}
        open={dialogOpen}
        setIsLoading={setIsLoading}
        setMaxAttempts={setMaxAttempts}
        setError={setHasError}
      />
      <div>
        <h2 className="title"> Color Guesser Game </h2>
        <Game
          gameId={gameId}
          maxAttempts={maxAttempts}
          setIsLoading={setIsLoading}
          newGame={() => setDialogOpen(true)}
          setError={setHasError}
        />
      </div>
    </div>
  );
};

export default GameContainer;
