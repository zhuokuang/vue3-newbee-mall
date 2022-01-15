import axios from "axios";
import { Toast } from "vant";
import router from "@/router";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

instance.defaults.withCredentials = true;
instance.defaults.headers.common["token"] =
  window.localStorage.getItem("token") || "";

instance.interceptors.response.use((res) => {
  if (res.status === 200) {
    // 未登录，需要登录
    if (res.data.code === 1) {
      router.push({ name: "login" });
    }
    return res.data;
  } else {
    Toast.fail("请求不成功");
    return Promise.reject({
      code: 3,
      message: "failure",
      data: "请求不成功",
    });
  }
});

export default instance;
