import styled from "styled-components";
import { Color } from "../../typing";

export const StyledColor = styled.div<{ color: Color }>`
  cursor: default;
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 1px solid #777;
  border-radius: 21px;
  cursor: pointer;
  background-color: #f0eaed;
  margin: 0.5rem;

  ${(props) => `background-color: ${props.color}`}
`;
