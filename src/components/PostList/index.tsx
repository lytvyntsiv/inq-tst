import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { PostListContainer } from "./styles";
import { Post } from "../../types/posts/interfaces";
import { RootState, useAppDispatch } from "../../store";
import { fetchAllPosts, handleOffset } from "../../store/apps/posts";
import PostItem from "../PostItem";
import Button from "../../ui-kit/button";
import RefactorModal from "../RefactorPostModal";

const PostList: FC = () => {
  const dispatch = useAppDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectPost, setSelectPost] = useState<Post | null>(null);

  const { posts, offset, isLoading } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  const onSelectPost = (post: Post) => {
    setSelectPost(post);
    setIsOpen(true);
  };

  return (
    <>
      {selectPost && (
        <RefactorModal
          post={selectPost}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
        />
      )}
      <PostListContainer isLoading={isLoading}>
        {posts.length > 0 ? (
          posts.slice(0, offset).map((post: Post) => {
            return (
              <PostItem
                post={post}
                key={post.id}
                selectPost={(post) => onSelectPost(post)}
              />
            );
          })
        ) : (
          <p>No posts...</p>
        )}
        <Button
          show={posts.length > 0}
          disabled={offset >= posts.length}
          onClick={() => dispatch(handleOffset())}
          text="Show more"
        />
      </PostListContainer>
    </>
  );
};

export default PostList;
