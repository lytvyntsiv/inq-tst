import React, { FC } from "react";
import { useSelector } from "react-redux";

import { PostListContainer } from "./styles";
import { RootState, useAppDispatch } from "../../store";
import Button from "../../ui-kit/button";
import CommentItem from "../CommentItem";
import { Comment } from "../../types/comment/interfaces";
import { handleCommentsOffset } from "../../store/apps/comments";

interface Props {
  comments: Comment[];
}

const CommentList: FC<Props> = ({ comments }) => {
  const dispatch = useAppDispatch();

  const { offset } = useSelector((state: RootState) => state.comments);

  return (
    <PostListContainer>
      {comments.slice(0, offset).map((comment) => {
        return <CommentItem comment={comment} key={comment.id} />;
      })}
      <Button
        show={comments.length > 0}
        disabled={offset >= comments.length}
        onClick={() => dispatch(handleCommentsOffset())}
        text="Show more"
      />
    </PostListContainer>
  );
};

export default CommentList;
