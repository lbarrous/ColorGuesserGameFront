import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  FormGroup,
  TextField,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useCallback, useState } from "react";
import GuessAPI from "../../api/GuessAPI";
import { Color, Title } from "./styles";

interface InitialDialogProps {
  onClose: () => void;
  open: boolean;
  onNewGame: (gameId: string) => void;
  setIsLoading: (value: boolean) => void;
  setMaxAttempts: (maxAttempts: number) => void;
  setError: (value: boolean) => void;
}
export const InitialDialog = (props: InitialDialogProps) => {
  const [inputValue, setInputValue] = useState<number>();
  const [showRules, setShowRules] = useState<boolean>(true);
  const {
    onClose,
    open,
    onNewGame,
    setIsLoading,
    setMaxAttempts,
    setError,
  } = props;

  const handleNewGame = useCallback(
    (event) => {
      event.preventDefault();
      onClose();
      setIsLoading(true);
      GuessAPI.getNewGame({
        maxAttempts: inputValue,
      })
        .then((response) => {
          setIsLoading(false);
          setMaxAttempts(inputValue || 0);
          onNewGame(response.data);
        })
        .catch((error) => {
          setError(true);
          setIsLoading(false);
          console.log(error);
        });
    },
    [inputValue, onClose, onNewGame, setError, setIsLoading, setMaxAttempts]
  );

  const handleInput = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      disableBackdropClick={true}
    >
      <DialogTitle id="simple-dialog-title">Start new Game</DialogTitle>
      <DialogContent>
        <Title onClick={() => setShowRules(!showRules)}>
          <h4>How to play</h4> {showRules ? <ExpandLess /> : <ExpandMore />}
        </Title>

        {showRules && (
          <div>
            <p>
              The purpose of the game is to guess a combination made of 5 colors
              (<Color color="red">red</Color>, <Color color="blue">blue</Color>,{" "}
              <Color color="green">green</Color>,{" "}
              <Color color="yellow">yellow</Color> and{" "}
              <Color color="purple">purple</Color>)
            </p>
            <p>
              For this, you have to introduce the amount of attempts you think
              you will need to guess the correct combination.
            </p>
            <p>
              You must select each circle to select the color you think it fits.
              After selecting each circle of a row you will have to check for
              the solution
            </p>
            <p>
              If it is correct you will win! Otherwise you will have to try
              again until you reach the maximum ammount of attempts you set up
              at first.
            </p>
            <p>
              For each mistake you will receive a hint. Close to the incorrect
              combinations, you will see as many green squares as correct colors
              are in your last combinations.
            </p>
          </div>
        )}
        <form data-testid="newGameForm" onSubmit={handleNewGame}>
          <FormGroup>
            <TextField
              label="Max attempts: "
              type="number"
              variant="outlined"
              onChange={handleInput}
            />
            <Divider light />
            <Button type="submit" variant="contained" color="primary">
              Send
            </Button>
          </FormGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
};
