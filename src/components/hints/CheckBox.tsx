import React from "react";
import { Hint } from "../../typing";
import { StyledHint } from "./styles";

interface CheckboxProps {
  hint: Hint;
}

export const CheckBox = (props: CheckboxProps) => (
  <StyledHint hint={props.hint}></StyledHint>
);
