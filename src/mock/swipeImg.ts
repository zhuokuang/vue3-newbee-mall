import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/home/swipe",
    method: "get",
    response: () => ({
      code: 0,
      message: "success",
      data: [
        {
          id: 1,
          url: "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner-p50-pocket.png",
          name: "HUAWEI P50 Pocket",
        },
        {
          id: 2,
          url: "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner-mate40.png",
          name: "HUAWEI Mate40",
        },
        {
          id: 3,
          url: "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner-iphone13.png",
          name: "iPhone 13 Pro",
        },
      ],
    }),
  },
] as MockMethod[];
