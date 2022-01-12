import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/login",
    method: "post",
    response: () => {
      return {
        code: 200,
        message: "login success",
        data: {},
      };
    },
  },
] as MockMethod[];
