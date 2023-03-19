import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { addComment, fetchComments } from "../../store/apps/comments";
import PostItem from "../../components/PostItem";
import CommentList from "../../components/CommentList";
import { StyledPostPage } from "./styles";
import { useForm } from "react-hook-form";
import CommentForm from "../../components/forms/CommentForm";
import { CommentFields } from "../../types/comment/interfaces";
import { toast } from "react-toastify";

const RefactorPost = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { postData } = useSelector((state: RootState) => state.comments);

  const { comments, ...post } = postData;

  const { register, handleSubmit, reset } = useForm<{
    name: string;
    email: string;
    body: string;
  }>();

  const handleAddComment = (e: CommentFields) => {
    if (!id) return;

    const comment = {
      ...e,
      postId: +id,
    };

    dispatch(addComment(comment))
      .then(() => {
        toast.success("Success !");
        reset();
      })
      .catch((e) => toast.error(e.message));
  };

  useEffect(() => {
    if (!id) return;

    dispatch(fetchComments(+id));
  }, []);

  return (
    <StyledPostPage>
      <PostItem post={post} />
      <CommentList comments={comments} />
      <CommentForm
        onSubmit={handleAddComment}
        handleSubmit={handleSubmit}
        register={register}
      />
    </StyledPostPage>
  );
};

export default RefactorPost;
