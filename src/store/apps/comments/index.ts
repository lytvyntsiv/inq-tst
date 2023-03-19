import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postService } from "../../../api";
import {
  Comment,
  commentsReducerSlice,
} from "../../../types/comment/interfaces";
import { commentService } from "../../../api/coment";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (id: number, thunkAPI) => {
    try {
      const { data } = await postService.getCommentsToPost(id);

      return { data };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const addComment = createAsyncThunk(
  "comments/addComment",
  async (comment: Omit<Comment, "id">, thunkAPI) => {
    try {
      const { data } = await commentService.postComment(comment);

      return { data };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState: commentsReducerSlice = {
  postData: {
    id: 1,
    title: "",
    body: "",
    comments: [],
  },
  offset: 3,
  isLoading: false,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    handleCommentsOffset: (state) => {
      if (state.offset < state.postData.comments.length) {
        state.offset += 8;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postData = action.payload.data;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postData.comments = [
          action.payload.data,
          ...state.postData.comments,
        ];
      })
      .addCase(addComment.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { handleCommentsOffset } = commentsSlice.actions;

export default commentsSlice.reducer;
