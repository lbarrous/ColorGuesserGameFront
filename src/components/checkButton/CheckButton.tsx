import React from "react";

interface CheckButtonProps {
  allowedToCheck: boolean;
  onCheckColors: () => void;
}

export const CheckButton = (props: CheckButtonProps) => {
  const { allowedToCheck, onCheckColors } = props;
  return (
    <div
      className={`ok-button ${allowedToCheck ? "" : "disabled"}`}
      onClick={() => allowedToCheck && onCheckColors()}
    >
      check
    </div>
  );
};
