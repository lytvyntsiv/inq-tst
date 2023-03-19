import styled from "styled-components";

interface ShowMoreButtonProps {
  show: boolean;
  bg?: string;
}

export const StyledButton = styled.button<ShowMoreButtonProps>`
  display: ${({ show }) => (show ? "flex" : "none")};
  background-color: ${({ bg }) => bg ?? "#405cf5"};
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    Ubuntu, sans-serif;
  height: 45px;
  font-size: 16px;
  transition: all 0.2s, box-shadow 0.08s ease-in;
  width: 200px;

  &:disabled {
    cursor: not-allowed;
    background-color: #bbbecf;
    box-shadow: none;

    &:hover {
      background-color: #bbbecf;
    }
  }

  &:hover {
    opacity: 0.8;
  }
`;
