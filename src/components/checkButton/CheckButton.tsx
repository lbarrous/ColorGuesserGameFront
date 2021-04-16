import React from "react";
import { StyledCheckButton } from "./styles";

interface CheckButtonProps {
  allowedToCheck: boolean;
  onCheckColors: () => void;
}

export const CheckButton = (props: CheckButtonProps) => {
  const { allowedToCheck, onCheckColors } = props;
  return (
    <StyledCheckButton
      disabled={!allowedToCheck}
      data-testid="checkButton"
      onClick={() => allowedToCheck && onCheckColors()}
    >
      check
    </StyledCheckButton>
  );
};
