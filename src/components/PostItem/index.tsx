import React, { FC } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Post } from "../../types/posts/interfaces";
import {
  PostContainer,
  PostDescription,
  PostHeader,
  PostTitle,
  StyledHeaderWrap,
  StyledIcon,
} from "./styles";
import { deletePost } from "../../store/apps/posts";
import { useAppDispatch } from "../../store";

interface Props {
  post: Post;
  selectPost?: (post: Post) => void;
}

const PostItem: FC<Props> = ({ post, selectPost }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deletePost(post.id))
      .then(() => {
        toast.success("Deleted success");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <PostContainer>
      <PostHeader>
        <PostTitle>{post.title}</PostTitle>
        <StyledHeaderWrap>
          <Link to={`/posts/${post.id}`}>Show comments</Link>
          {selectPost && (
            <StyledIcon
              onClick={() => {
                selectPost(post);
              }}
            >
              <img src="/icons/refactor-icon.svg" alt="refactor" />
            </StyledIcon>
          )}
          <StyledIcon onClick={() => handleDelete()}>
            <img src="/icons/delete-icon.svg" alt="delete" />
          </StyledIcon>
        </StyledHeaderWrap>
      </PostHeader>

      <PostDescription>{post.body}</PostDescription>
    </PostContainer>
  );
};

export default PostItem;
