import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/category/getCategories",
    method: "get",
    response: () => ({
      code: 0,
      message: "success",
      data: [
        {
          categoryId: 15,
          categoryLevel: 1,
          categoryName: "家电 数码 手机",
          categoryChildren: [
            {
              categoryId: 17,
              parentId: 15,
              categoryLevel: 2,
              categoryName: "家电",
              categoryChildren: [
                {
                  categoryId: 20,
                  categoryLevel: 3,
                  categoryName: "生活电器",
                },
                { categoryId: 110, categoryLevel: 3, categoryName: "wer" },
                {
                  categoryId: 21,
                  categoryLevel: 3,
                  categoryName: "厨房电器",
                },
                {
                  categoryId: 22,
                  categoryLevel: 3,
                  categoryName: "扫地机器人",
                },
                { categoryId: 23, categoryLevel: 3, categoryName: "吸尘器" },
                { categoryId: 24, categoryLevel: 3, categoryName: "取暖器" },
                { categoryId: 25, categoryLevel: 3, categoryName: "豆浆机" },
                { categoryId: 26, categoryLevel: 3, categoryName: "暖风机" },
                { categoryId: 27, categoryLevel: 3, categoryName: "加湿器" },
                {
                  categoryId: 28,
                  categoryLevel: 3,
                  categoryName: "蓝牙音箱",
                },
                { categoryId: 29, categoryLevel: 3, categoryName: "烤箱" },
                { categoryId: 30, categoryLevel: 3, categoryName: "卷发器" },
                {
                  categoryId: 31,
                  categoryLevel: 3,
                  categoryName: "空气净化器",
                },
              ],
            },
            {
              categoryId: 18,
              parentId: 15,
              categoryLevel: 2,
              categoryName: "数码",
              categoryChildren: [
                {
                  categoryId: 32,
                  categoryLevel: 3,
                  categoryName: "游戏主机",
                },
                {
                  categoryId: 43,
                  categoryLevel: 3,
                  categoryName: "二手手机",
                },
                {
                  categoryId: 33,
                  categoryLevel: 3,
                  categoryName: "数码精选",
                },
                {
                  categoryId: 34,
                  categoryLevel: 3,
                  categoryName: "平板电脑",
                },
                {
                  categoryId: 35,
                  categoryLevel: 3,
                  categoryName: "苹果 Apple",
                },
                {
                  categoryId: 36,
                  categoryLevel: 3,
                  categoryName: "电脑主机",
                },
                {
                  categoryId: 37,
                  categoryLevel: 3,
                  categoryName: "数码相机",
                },
                {
                  categoryId: 38,
                  categoryLevel: 3,
                  categoryName: "电玩动漫",
                },
                {
                  categoryId: 39,
                  categoryLevel: 3,
                  categoryName: "单反相机",
                },
                {
                  categoryId: 40,
                  categoryLevel: 3,
                  categoryName: "键盘鼠标",
                },
                { categoryId: 41, categoryLevel: 3, categoryName: "无人机" },
                { categoryId: 42, categoryLevel: 3, categoryName: "二手电脑" },
              ],
            },
            {
              categoryId: 19,
              parentId: 15,
              categoryLevel: 2,
              categoryName: "手机",
              categoryChildren: [
                {
                  categoryId: 45,
                  categoryLevel: 3,
                  categoryName: "荣耀手机",
                },
                {
                  categoryId: 46,
                  categoryLevel: 3,
                  categoryName: "华为手机",
                },
                {
                  categoryId: 49,
                  categoryLevel: 3,
                  categoryName: "华为 P30",
                },
                {
                  categoryId: 44,
                  categoryLevel: 3,
                  categoryName: "iPhone 11",
                },
                {
                  categoryId: 47,
                  categoryLevel: 3,
                  categoryName: "苹果 iPhone",
                },
                {
                  categoryId: 48,
                  categoryLevel: 3,
                  categoryName: "华为 Mate 20",
                },
                {
                  categoryId: 51,
                  categoryLevel: 3,
                  categoryName: "小米手机",
                },
                { categoryId: 53, categoryLevel: 3, categoryName: "OPPO" },
                { categoryId: 54, categoryLevel: 3, categoryName: "一加" },
                {
                  categoryId: 55,
                  categoryLevel: 3,
                  categoryName: "小米 MIX",
                },
                { categoryId: 56, categoryLevel: 3, categoryName: "Reno" },
                { categoryId: 57, categoryLevel: 3, categoryName: "vivo" },
                {
                  categoryId: 58,
                  categoryLevel: 3,
                  categoryName: "手机以旧换新",
                },
              ],
            },
          ],
        },
        {
          categoryId: 16,
          categoryLevel: 1,
          categoryName: "女装 男装 穿搭",
          categoryChildren: [
            {
              categoryId: 67,
              parentId: 16,
              categoryLevel: 2,
              categoryName: "女装",
              categoryChildren: [
                { categoryId: 76, categoryLevel: 3, categoryName: "外套" },
              ],
            },
          ],
        },
        {
          categoryId: 61,
          categoryLevel: 1,
          categoryName: "家具 家饰 家纺",
          categoryChildren: [
            {
              categoryId: 70,
              parentId: 61,
              categoryLevel: 2,
              categoryName: "家具",
              categoryChildren: [
                { categoryId: 77, categoryLevel: 3, categoryName: "沙发" },
              ],
            },
          ],
        },
        {
          categoryId: 59,
          categoryLevel: 1,
          categoryName: "运动 户外 乐器",
          categoryChildren: [
            {
              categoryId: 73,
              parentId: 59,
              categoryLevel: 2,
              categoryName: "运动",
              categoryChildren: [
                { categoryId: 78, categoryLevel: 3, categoryName: "跑鞋" },
              ],
            },
          ],
        },
        {
          categoryId: 60,
          categoryLevel: 1,
          categoryName: "游戏 动漫 影视",
          categoryChildren: [
            {
              categoryId: 79,
              parentId: 60,
              categoryLevel: 2,
              categoryName: "游戏",
              categoryChildren: [
                { categoryId: 82, categoryLevel: 3, categoryName: "LOL" },
              ],
            },
          ],
        },
        {
          categoryId: 62,
          categoryLevel: 1,
          categoryName: "美妆 清洁 宠物",
          categoryChildren: [
            {
              categoryId: 83,
              parentId: 62,
              categoryLevel: 2,
              categoryName: "美妆",
              categoryChildren: [
                { categoryId: 86, categoryLevel: 3, categoryName: "口红" },
                { categoryId: 104, categoryLevel: 3, categoryName: "睫毛膏" },
                { categoryId: 103, categoryLevel: 3, categoryName: "腮红" },
                { categoryId: 102, categoryLevel: 3, categoryName: "粉底" },
                { categoryId: 101, categoryLevel: 3, categoryName: "隔离霜" },
                { categoryId: 100, categoryLevel: 3, categoryName: "美白" },
                { categoryId: 99, categoryLevel: 3, categoryName: "气垫" },
              ],
            },
          ],
        },
        {
          categoryId: 63,
          categoryLevel: 1,
          categoryName: "工具 装修 建材",
          categoryChildren: [
            {
              categoryId: 87,
              parentId: 63,
              categoryLevel: 2,
              categoryName: "工具",
              categoryChildren: [
                { categoryId: 90, categoryLevel: 3, categoryName: "转换器" },
              ],
            },
          ],
        },
        {
          categoryId: 66,
          categoryLevel: 1,
          categoryName: "鞋靴 箱包 配件",
          categoryChildren: [
            {
              categoryId: 95,
              parentId: 66,
              categoryLevel: 2,
              categoryName: "鞋靴",
              categoryChildren: [
                { categoryId: 98, categoryLevel: 3, categoryName: "休闲鞋" },
              ],
            },
          ],
        },
        {
          categoryId: 65,
          categoryLevel: 1,
          categoryName: "玩具 孕产 用品",
          categoryChildren: [
            {
              categoryId: 115,
              parentId: 65,
              categoryLevel: 2,
              categoryName: "玩具",
              categoryChildren: [
                { categoryId: 116, categoryLevel: 3, categoryName: "机器人" },
              ],
            },
          ],
        },
      ],
    }),
  },
] as MockMethod[];
