import axios from "./axios";
import { ResBaseType, UserInfo } from "./types";

export const getUserInfo = (): Promise<ResBaseType<UserInfo>> =>
  axios.get("/api/user/info");
