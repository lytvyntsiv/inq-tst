import React, { FC, useEffect } from "react";
import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import {
  HeaderInputsContainer,
  StyledForm,
  StyledFormTitle,
} from "../../CommentList/styles";
import Input from "../../../ui-kit/Input";
import TextArea from "../../../ui-kit/TextArea";
import Button from "../../../ui-kit/button";
import { Post } from "../../../types/posts/interfaces";

interface Props {
  onSubmit: (post: Omit<Post, "id">) => void;
  register: UseFormRegister<Omit<Post, "id">>;
  handleSubmit: UseFormHandleSubmit<Omit<Post, "id">>;
  titleValue?: string;
  bodyValue?: string;
  setValue?: UseFormSetValue<Omit<Post, "id">>;
}

const PostForm: FC<Props> = ({
  onSubmit,
  register,
  handleSubmit,
  titleValue,
  bodyValue,
  setValue,
}) => {
  useEffect(() => {
    if (!setValue) return;

    if (titleValue) {
      setValue("title", titleValue);
    }

    if (bodyValue) {
      setValue("body", bodyValue);
    }
  }, []);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledFormTitle>Update Post</StyledFormTitle>
      <HeaderInputsContainer>
        <Input
          required
          label="Tittle"
          register={register}
          placeholder="John Doe"
          name={"title"}
          type="text"
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

export default PostForm;
