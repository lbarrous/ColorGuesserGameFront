import styled from "styled-components";
import { Color } from "../../typing";

export const StyledSolutionCircle = styled.div<{ color: Color }>`
  cursor: default;
  ${(props) => `background-color: ${props.color}`}
`;

export const StyledSolutionContainer = styled.div<{ hidden: boolean }>`
  ${(props) => props.hidden && `display: none;`}
`;
