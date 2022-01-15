import axios from "./axios";
import { ResBaseType, User } from "@/api/types";

export const postLogin = (body: {
  username: string;
  password: string;
}): Promise<ResBaseType<{ token: string }>> => axios.post("/api/login", body);
