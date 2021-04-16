import styled from "styled-components";
import { Color } from "../../typing";

export const StyledCircle = styled.span<{ color: Color }>`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 1px solid #777;
  margin-right: 8px;
  border-radius: 21px;
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
