import React, { FC } from "react";
import {
  CommentContainer,
  CommentDescription,
  CommentEmail,
  CommentHeader,
  CommentName,
} from "./styles";
import { Comment } from "../../types/comment/interfaces";

interface Props {
  comment: Comment;
}

const CommentItem: FC<Props> = ({ comment }) => {
  return (
    <CommentContainer>
      <CommentHeader>
        <div>
          <CommentName>{comment.name}</CommentName>
          <CommentEmail>{comment.email}</CommentEmail>
        </div>
      </CommentHeader>

      <CommentDescription>{comment.body}</CommentDescription>
    </CommentContainer>
  );
};

export default CommentItem;
