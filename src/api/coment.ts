import { AxiosResponse } from "axios";
import { Comment } from "../types/comment/interfaces";
import { Axios } from "./axiosConfig/axios";

export class commentService {
  static async postComment(
    comment: Omit<Comment, "id">
  ): Promise<AxiosResponse> {
    return await Axios.post<Omit<Comment, "id">>(`comments`, comment);
  }
}
