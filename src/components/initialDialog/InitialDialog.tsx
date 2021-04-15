import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormGroup,
  TextField
} from "@material-ui/core";
import { useCallback, useState } from "react";
import GuessAPI from "../../api/GuessAPI";

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
  const {
    onClose,
    open,
    onNewGame,
    setIsLoading,
    setMaxAttempts,
    setError
  } = props;

  const handleNewGame = useCallback(
    event => {
      event.preventDefault();
      onClose();
      setIsLoading(true);
      GuessAPI.getNewGame({
        maxAttempts: inputValue
      })
        .then(response => {
          setIsLoading(false);
          setMaxAttempts(inputValue || 0);
          onNewGame(response.data);
        })
        .catch(error => {
          setError(true);
          setIsLoading(false);
          console.log(error);
        });
    },
    [inputValue]
  );

  const handleInput = useCallback(event => {
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
        <form onSubmit={handleNewGame}>
          <FormGroup>
            <TextField
              label="Max attempts: "
              type="number"
              variant="outlined"
              onChange={handleInput}
            />
            <Button type="submit" variant="contained" color="primary">
              Send
            </Button>
          </FormGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
};
