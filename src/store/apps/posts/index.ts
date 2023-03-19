import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post, PostReducerSlice } from "../../../types/posts/interfaces";
import { postService } from "../../../api";

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async (_, thunkAPI) => {
    try {
      const { data } = await postService.getAllPosts();

      return { data };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (post: Omit<Post, "id">, thunkAPI) => {
    try {
      const { data } = await postService.addPost(post);

      return { data };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id: number, thunkAPI) => {
    try {
      await postService.deletePost(id);

      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (post: Post, thunkAPI) => {
    try {
      await postService.updatePost(post);

      return post;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState: PostReducerSlice = {
  posts: [],
  offset: 8,
  isLoading: false,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    handleOffset: (state) => {
      if (state.offset < state.posts.length) {
        state.offset += 8;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload.data.reverse();
      })
      .addCase(fetchAllPosts.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = [action.payload.data, ...state.posts];
      })
      .addCase(addPost.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(deletePost.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = state.posts.map((post) => {
          if (post.id === action.payload.id) {
            return {
              ...post,
              body: action.payload.body,
              title: action.payload.title,
            };
          } else {
            return post;
          }
        });
      })
      .addCase(updatePost.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { handleOffset } = postSlice.actions;

export default postSlice.reducer;
