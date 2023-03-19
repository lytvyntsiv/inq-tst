import styled from "styled-components";

export const CommentContainer = styled.div`
  border-radius: 10px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  margin-bottom: 10px;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CommentName = styled.div`
  font-family: Century, sans-serif;
  font-size: 15px;
  font-weight: 700;
  text-align: start;
  margin-bottom: 8px;
`;

export const CommentEmail = styled.div`
  text-align: start;
  margin-bottom: 15px;
`;

export const CommentDescription = styled.div`
  text-align: start;
`;
