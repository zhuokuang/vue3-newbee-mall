import axios from "axios";
import { Toast } from "vant";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

instance.interceptors.response.use((res) => {
  if (res.status === 200) {
    return res.data;
  } else {
    Toast.fail("请求不成功");
  }
});

export default instance;
