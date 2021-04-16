import styled from "styled-components";
import { Hint } from "../../typing";

export const StyledHint = styled.span<{ hint: Hint }>`
  cursor: default;
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border: 1px solid #777;
  background-color: #f0eaed;
  margin: 0.938rem 2px;
  font-size: 0.75em;
  padding: 0;
  ${(props) => props.hint === Hint.CORRECT && `background-color: #00bb22;`}
`;

export const StyledHintContainer = styled.div`
  margin-right: 0;
  display: inline-block;
  vertical-align: bottom;
`;
