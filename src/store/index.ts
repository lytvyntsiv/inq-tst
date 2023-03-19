import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import posts from "./apps/posts";
import comments from "./apps/comments";

export const store = configureStore({
  reducer: {
    posts,
    comments,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
