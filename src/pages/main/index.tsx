import React from "react";
import PostList from "../../components/PostList";
import { useAppDispatch } from "../../store";
import { useForm } from "react-hook-form";
import { Post } from "../../types/posts/interfaces";
import { addPost } from "../../store/apps/posts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledMainPage } from "./styles";
import PostForm from "../../components/forms/PostForm";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<Omit<Post, "id">>();

  const onSubmit = (post: Omit<Post, "id">) => {
    dispatch(addPost(post))
      .then(() => {
        toast.success("Success !");
        reset();
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <StyledMainPage>
      <ToastContainer />
      <div style={{ width: "70%", margin: "0 auto" }}>
        <PostForm
          onSubmit={onSubmit}
          register={register}
          handleSubmit={handleSubmit}
        />
        <PostList />
      </div>
    </StyledMainPage>
  );
};

export default MainPage;
