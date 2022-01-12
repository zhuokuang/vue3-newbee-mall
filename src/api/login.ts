import axios from "./axios";

export const postLogin = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  return axios.post("/api/login", {
    username,
    password,
  });
};
