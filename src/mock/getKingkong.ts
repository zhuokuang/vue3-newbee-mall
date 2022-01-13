import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/home/kingkong",
    method: "get",
    response: () => ({
      code: 0,
      message: "success",
      data: [
        {
          name: "新蜂超市",
          imgUrl:
            "https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png",
          categoryId: 100001,
          linkTo: "https:www.baidu.com",
        },
        {
          name: "新蜂服饰",
          imgUrl:
            "https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png",
          categoryId: 100003,
          linkTo: "https:www.baidu.com",
        },
        {
          name: "全球购",
          imgUrl:
            "https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png",
          categoryId: 100002,
          linkTo: "https:www.baidu.com",
        },
        {
          name: "新蜂生鲜",
          imgUrl:
            "https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png",
          categoryId: 100004,
          linkTo: "https:www.baidu.com",
        },
        {
          name: "新蜂到家",
          imgUrl:
            "https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png",
          categoryId: 100005,
          linkTo: "https:www.baidu.com",
        },
        {
          name: "充值缴费",
          imgUrl:
            "https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png",
          categoryId: 100006,
          linkTo: "https:www.baidu.com",
        },
        {
          name: "9.9元拼",
          imgUrl: "https://s.yezgea02.com/1604041127880/9.9%402x.png",
          categoryId: 100007,
          linkTo: "https:www.baidu.com",
        },
        {
          name: "领劵",
          imgUrl:
            "https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png",
          categoryId: 100008,
          linkTo: "https:www.baidu.com",
        },
        {
          name: "省钱",
          imgUrl:
            "https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png",
          categoryId: 100009,
          linkTo: "https:www.baidu.com",
        },
        {
          name: "全部",
          imgUrl:
            "https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png",
          categoryId: 100010,
          linkTo: "https:www.baidu.com",
        },
      ],
    }),
  },
] as MockMethod[];
