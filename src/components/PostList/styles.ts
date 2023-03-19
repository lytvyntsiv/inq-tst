import styled from "styled-components";

interface StylesPostListProps {
  showScroll: boolean;
}

interface PostListContainerProps {
  isLoading?: boolean;
}

export const PostListContainer = styled.div<PostListContainerProps>`
  opacity: ${({ isLoading }) => (isLoading ? "0.8" : "1")};

  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
`;

export const StylesPostList = styled.div<StylesPostListProps>`
  height: ${({ showScroll }) => (showScroll ? "60vh" : "0")};
  overflow-y: scroll;

  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #c2c2c5;
  }
`;
