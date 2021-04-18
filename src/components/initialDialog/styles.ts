import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Color = styled.span<{ color: string }>`
  color: ${(props) => `${props.color}`};
`;
