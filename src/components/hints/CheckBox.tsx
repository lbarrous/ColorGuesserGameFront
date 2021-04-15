import React from "react";
import { Hint } from "../../typing";

interface CheckboxProps {
  hint: Hint;
}

export const CheckBox = (props: CheckboxProps) => (
  <span className={props.hint}></span>
);
