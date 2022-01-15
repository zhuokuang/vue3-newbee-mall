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
        // token 是 username | 1970年1月1日至今的天数
        // 例如：admin|19007
        const token =
          username +
          "|" +
          Math.floor(Number(new Date()) / (1000 * 60 * 60 * 24));
        return {
          code: 0,
          message: "login success",
          data: { token },
        };
      }
      // 登录失败
      return {
        code: 2,
        message: "login failed",
        data: {},
      };
    },
  },
] as MockMethod[];
