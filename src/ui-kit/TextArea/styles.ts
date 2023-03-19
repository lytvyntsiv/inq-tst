import styled from "styled-components";

interface StyledInputProps {
  width?: string;
  height?: string;
  fontSize?: string;
}

export const InputAreaContainer = styled.div<StyledInputProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledInputArea = styled.textarea<StyledInputProps>`
  width: ${({ width }) => `${width}` ?? "200px"};
  height: ${({ height }) => `${height}` ?? "40px"};
  font-size: ${({ fontSize }) => `${fontSize}` ?? "16px"};
`;

export const StyledLabelArea = styled.span`
  text-align: start;
`;
