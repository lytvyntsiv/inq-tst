import React, { FC, InputHTMLAttributes } from "react";
import { StyledInput, StyledLabel } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  width?: number;
  height?: number;
  label?: string;
  register?: any;
  name: string;
}

const Input: FC<Props> = ({
  width,
  height,
  label,
  register,
  name,
  ...rest
}) => {
  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        width={width}
        height={height}
        {...(register && register(`${name}`))}
        {...rest}
      />
    </>
  );
};

export default Input;
