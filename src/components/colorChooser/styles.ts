import styled from "styled-components";
import { Color } from "../../typing";

export const StyledColor = styled.div<{ color: Color }>`
  cursor: default;
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid #777;
  border-radius: 1.313rem;
  cursor: pointer;
  background-color: #f0eaed;
  margin: 0.5rem;

  ${(props) => `background-color: ${props.color}`}
`;
