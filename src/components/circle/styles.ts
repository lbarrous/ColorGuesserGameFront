import styled from "styled-components";
import { Color } from "../../typing";

export const StyledCircle = styled.span<{ color: Color }>`
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid #777;
  margin-right: 0.5rem;
  border-radius: 1.313rem;
  cursor: pointer;
  ${(props) => `background-color: ${props.color}`}
`;

export const StyledCircleContainer = styled.div`
  display: inline-block;
  vertical-align: bottom;
`;

export const StyledCircleRow = styled.div`
  margin-left: 5px;
  display: inline-block;
  vertical-align: bottom;
`;
