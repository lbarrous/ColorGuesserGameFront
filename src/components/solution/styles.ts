import styled from "styled-components";
import { Color } from "../../typing";

export const StyledSolutionCircle = styled.div<{ color: Color }>`
  cursor: default;
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 1px solid #777;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 21px;
  cursor: pointer;
  ${(props) => `background-color: ${props.color}`}
`;

export const StyledSolutionContainer = styled.div<{ hidden: boolean }>`
  ${(props) => props.hidden && `display: none;`}
`;

export const StyledNewGameLink = styled.a`
  cursor: pointer;
`;
