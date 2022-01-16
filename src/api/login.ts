import axios from "./axios";
import { ResBaseType, User } from "@/types";

export const postLogin = (
  body: User
): Promise<ResBaseType<{ token: string }>> => axios.post("/api/login", body);
