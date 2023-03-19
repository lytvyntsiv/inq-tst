import { AxiosResponse } from "axios";
import { Post } from "../types/posts/interfaces";
import { Axios } from "./axiosConfig/axios";

export class postService {
  static async getAllPosts(): Promise<AxiosResponse> {
    return await Axios.get<Post[]>(`posts`);
  }

  static async getCommentsToPost(id: number): Promise<AxiosResponse> {
    return await Axios.get<Post>(`posts/${id}?_embed=comments`);
  }

  static async addPost(post: Omit<Post, "id">): Promise<AxiosResponse> {
    return await Axios.post<Omit<Post, "id">>(`posts`, post);
  }

  static async deletePost(id: number): Promise<AxiosResponse> {
    return await Axios.delete<Post>(`posts/${id}`);
  }

  static async updatePost(post: Post): Promise<AxiosResponse> {
    const { id, ...data } = post;

    return await Axios.put<Post>(`posts/${id}`, data);
  }
}
