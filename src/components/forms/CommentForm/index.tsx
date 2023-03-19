import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";

import {
  HeaderInputsContainer,
  StyledForm,
  StyledFormTitle,
} from "../../CommentList/styles";
import Input from "../../../ui-kit/Input";
import TextArea from "../../../ui-kit/TextArea";
import Button from "../../../ui-kit/button";
import { CommentFields } from "../../../types/comment/interfaces";

interface Props {
  onSubmit: (data: CommentFields) => void;
  handleSubmit: (
    onSubmit: (data: CommentFields) => void
  ) => (event?: React.BaseSyntheticEvent) => Promise<void>;
  register: UseFormRegister<CommentFields>;
}

const CommentForm: FC<Props> = ({ onSubmit, register, handleSubmit }) => {
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledFormTitle>Add comment</StyledFormTitle>
      <HeaderInputsContainer>
        <Input
          required
          label="Your name :"
          register={register}
          placeholder="John Doe"
          name={"name"}
          type="text"
        />
        <Input
          required
          name={"email"}
          label="Your email :"
          placeholder="email@gmail.com"
          register={register}
          type="email"
        />
      </HeaderInputsContainer>
      <TextArea
        required
        label="Your comment :"
        name={"body"}
        register={register}
        width="100%"
        height="150px"
      />
      <Button show={true} disabled={false} text={"Submit"} type="submit" />
    </StyledForm>
  );
};

export default CommentForm;
