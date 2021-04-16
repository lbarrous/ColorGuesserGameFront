import styled from "styled-components";

export const StyledGGuessBoard = styled.div`
  margin-top: 15px;
`;

export const StyledGuessBoardRow = styled.div<{ isActive: boolean }>`
  display: block;

  margin: 0 auto 0.188rem auto;
  max-width: 25rem;

  ${(props) =>
    props.isActive
      ? `border: 2px solid #bbaaaa;
  background-color: #fff9fc;`
      : `border: 1px solid #d0cacd;`}
`;
