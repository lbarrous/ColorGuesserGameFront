import { Popover } from "@material-ui/core";
import React from "react";
import { Color } from "../../typing";
import { ColorChooser } from "../colorChooser/ColorChoser";
import { StyledCircle } from "./styles";

interface CircleProps {
  color: Color;
  position: number;
  onChangeColor: (color: Color, position: number) => void;
}

export const Circle = (props: CircleProps) => {
  const { color, position, onChangeColor } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <StyledCircle data-testid="circle" onClick={handleClick}></StyledCircle>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <ColorChooser
          onColorSelected={(color: Color, position: number) => {
            handleClose();
            return onChangeColor(color, position);
          }}
          position={position}
        />
      </Popover>
    </div>
  );
};
