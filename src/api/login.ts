import axios from "./axios";

export const postLogin = (body: { username: string; password: string }) =>
  axios.post("/api/login", body);
