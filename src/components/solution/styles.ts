import styled from "styled-components";
import { Color } from "../../typing";

export const StyledSolutionCircle = styled.div<{ color: Color }>`
  cursor: default;
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid #777;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 1.313rem;
  cursor: pointer;
  ${(props) => `background-color: ${props.color}`}
`;

export const StyledNewGameLink = styled.a`
  cursor: pointer;
`;
