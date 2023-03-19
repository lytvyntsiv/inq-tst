import React, { ButtonHTMLAttributes, FC } from "react";
import { StyledButton } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  show: boolean;
  disabled: boolean;
  text: string;
  bg?: string;
}

const Button: FC<Props> = ({ show, text, bg, disabled, ...rest }) => {
  return (
    <StyledButton show={show} disabled={disabled} bg={bg} {...rest}>
      {text}
    </StyledButton>
  );
};

export default Button;
