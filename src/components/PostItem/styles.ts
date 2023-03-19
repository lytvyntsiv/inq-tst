import styled from "styled-components";

export const PostContainer = styled.div`
  border-radius: 10px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  margin-bottom: 10px;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostTitle = styled.div`
  font-family: Century, sans-serif;
  font-size: 15px;
  font-weight: 700;
`;

export const PostDescription = styled.div`
  text-align: start;
`;

export const StyledHeaderWrap = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const StyledIcon = styled.div`
  cursor: pointer;
`;
