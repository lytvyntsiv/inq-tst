import React, { FC, TextareaHTMLAttributes } from "react";
import { InputAreaContainer, StyledInputArea, StyledLabelArea } from "./styles";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: string;
  height?: string;
  register?: any;
  label?: string;
  name: string;
}

const TextArea: FC<Props> = ({
  width,
  name,
  height,
  register,
  label,
  ...rest
}) => {
  return (
    <InputAreaContainer>
      <StyledLabelArea>{label}</StyledLabelArea>
      <StyledInputArea
        width={width}
        height={height}
        {...(register && register(`${name}`))}
        {...rest}
      />
    </InputAreaContainer>
  );
};

export default TextArea;
