import styled from "styled-components";

interface StyledInputProps {
  width?: number;
  height?: number;
  fontSize?: number;
}

export const StyledInput = styled.input<StyledInputProps>`
  width: ${({ width }) => `${width}px` && "200px"};
  height: ${({ height }) => `${height}px` && "40px"};
  font-size: ${({ fontSize }) => `${fontSize}px` && "16px"};
  padding-left: 10px;
`;

export const StyledLabel = styled.span`
  text-align: start;
`;
