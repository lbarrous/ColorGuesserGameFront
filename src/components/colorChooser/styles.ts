import styled from "styled-components";
import { Color } from "../../typing";

export const StyledColor = styled.div<{ color: Color }>`
  cursor: default;

  ${(props) => `background-color: ${props.color}`}
`;
