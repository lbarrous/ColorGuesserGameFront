import styled from "styled-components";

export const StyledCheckButton = styled.div<{ disabled: boolean }>`
  font-size: 0.9em;
  padding: 16px 0;
  color: #33aa88;
  margin-right: 12px;
  display: inline-block;
  vertical-align: bottom;

  ${(props) =>
    props.disabled
      ? `color: #ccc0c6;
  cursor: default;`
      : `color: #33aa88; cursor: pointer;`}
`;
