import { Post } from "../../posts/interfaces";

export interface Comment {
  postId: number;
  name: string;
  email: string;
  body: string;
  id?: number;
}

interface PostData extends Post {
  comments: Comment[];
}

export interface commentsReducerSlice {
  postData: PostData;
  offset: number;
  isLoading: boolean;
}

export interface CommentFields {
  name: string;
  email: string;
  body: string;
}
