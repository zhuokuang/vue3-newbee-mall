import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/user/info",
    method: "get",
    response: (req: any) => {
      // 验证 token 的逻辑：
      // 取 token 后面的数字，
      // 与1970年1月1日至今的天数进行比较
      const [username, tokenKey] = req.headers.token?.split("|") || [];
      const day = String(
        Math.floor(Number(new Date()) / (1000 * 60 * 60 * 24))
      );
      if (tokenKey === day) {
        const loginName = username;
        const nickName = username;
        return {
          code: 0,
          message: "success",
          data: {
            loginName,
            nickName,
            introduce: `${nickName} love life!`,
          },
        };
      } else {
        return {
          code: 1,
          message: "please login",
          data: {},
        };
      }
    },
  },
] as MockMethod[];
