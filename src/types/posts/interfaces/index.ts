export interface Post {
  title: string;
  body: string;
  id: number;
}

export interface PostReducerSlice {
  posts: Post[];
  offset: number;
  isLoading: boolean;
}
