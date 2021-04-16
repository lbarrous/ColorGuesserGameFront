import styled from "styled-components";

export const StyledGGuessBoard = styled.div`
  margin-top: 15px;
`;

export const StyledGuessBoardRow = styled.div<{ isActive: boolean }>`
  display: block;

  margin: 0 auto 3px auto;
  max-width: 400px;

  ${(props) =>
    props.isActive
      ? `border: 2px solid #bbaaaa;
  background-color: #fff9fc;`
      : `border: 1px solid #d0cacd;`}
`;
