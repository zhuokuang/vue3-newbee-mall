import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/login",
    method: "post",
    response: (req: any) => {
      const { username, password } = req.body;
      if (
        (username === "admin" && password === "123") ||
        (username === "kz" && password === "cr") ||
        (username === "cr" && password === "kz")
      ) {
        return {
          code: 0,
          message: "login success",
          data: {},
        };
      }
      return {
        code: 1,
        message: "login failed",
        data: {},
      };
    },
  },
] as MockMethod[];
