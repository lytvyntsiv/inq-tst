import React, { FC } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import { modalStyles } from "./utils";
import PostForm from "../forms/PostForm";
import { Post } from "../../types/posts/interfaces";
import { updatePost } from "../../store/apps/posts";
import { useAppDispatch } from "../../store";

interface Props {
  modalIsOpen: boolean;
  post: Post;
  setIsOpen: (arg: boolean) => void;
}
const RefactorModal: FC<Props> = ({ modalIsOpen, post, setIsOpen }) => {
  const { register, handleSubmit, reset, setValue } =
    useForm<Omit<Post, "id">>();
  const dispatch = useAppDispatch();
  const { id } = post;

  const onChangePost = (post: Omit<Post, "id">) => {
    const updatedPost = {
      ...post,
      id,
    };

    dispatch(updatePost(updatedPost))
      .then(() => {
        toast.success("Update success !");
        reset();
        setIsOpen(false);
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <Modal isOpen={modalIsOpen} contentLabel="Delete ?" style={modalStyles}>
      <PostForm
        titleValue={post.title}
        bodyValue={post.body}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onChangePost}
        setValue={setValue}
      />
    </Modal>
  );
};

export default RefactorModal;
