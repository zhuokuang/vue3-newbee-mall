import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/home/goods-list",
    method: "get",
    response: (req: any) => {
      const { type } = req.query;
      switch (type) {
        case "1":
          return {
            code: 0,
            message: "success",
            data: [
              {
                id: 10925,
                name: "HUAWEI P50 Pocket 4G全网通 超光谱影像系...",
                info: "华为P50Pocket新品，华为年度旗舰折叠...",
                imgUrl:
                  "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/p50-pocket-gold.png",
                price: 10988,
                tag: "折叠万象",
              },
              {
                id: 10926,
                name: "华为笔记本电脑MateBook X Pro 2022",
                info: "原色全面屏，轻薄高能，超级终端",
                imgUrl:
                  "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/MateBook%20X%20Pro.png",
                price: 10499,
                tag: "入目惊鸿",
              },
              {
                id: 10915,
                name: "Apple iPhone 13 (A2634) 256GB ...",
                info: "解锁超能力！超先进双摄系统，超强耐用性，超劲...",
                imgUrl:
                  "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/iphone-13-pink-select-2021.png",
                price: 6799,
                tag: "解锁超能力",
              },
              {
                id: 10920,
                name: "MacBook Pro 16英寸 M1 Pro芯片",
                info: "16G 512G 银色。M1Pro和M1Ma...",
                imgUrl:
                  "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/mbp16-silver-select-202110_GEO_CN.jpeg",
                price: 18999,
                tag: "强者的强",
              },
              {
                id: 10921,
                name: "HUAWEI P50 Pro 4G全网通 8GB+512GB...",
                info: "麒麟9000芯片,万象双环设计",
                imgUrl:
                  "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/p50-gold.png",
                price: 7488,
                tag: "万象新生",
              },
            ],
          };

        case "2":
          return {
            code: 0,
            message: "success",
            data: [
              {
                id: 10918,
                name: "Apple AirPods (第三代)",
                info: "AirPods第三代搭载空间音频和自适应均衡...",
                imgUrl:
                  "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/MME73_AV4_GEO_CN.jpeg",
                price: 1399,
                tag: "美妙新声",
              },
              {
                id: 10908,
                name: "HUAWEI Mate 40 Pro 全网通5G手机 8GB...",
                info: "5nm麒麟9000旗舰芯片 | 超感光徕卡电...",
                imgUrl:
                  "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/mate40-white.png",
                price: 6488,
                tag: "跃见非凡",
              },
              {
                id: 10906,
                name: "Apple iPhone12 Pro (A2408) 128...",
                info: "A14仿生芯片，6.1英寸超视网膜XDR显示...",
                imgUrl:
                  "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/iphone-12-pro-blue-hero.png",
                price: 8499,
                tag: "自我再飞跃",
              },
              {
                id: 10902,
                name: "华为 HUAWEI P40 冰霜银 全网通5G手机",
                info: "麒麟990 5G SoC芯片 5000万超感...",
                imgUrl:
                  "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/p40-silver.png",
                price: 4299,
                tag: "超感知影像",
              },
            ],
          };

        case "3":
          return {
            code: 0,
            message: "success",
            data: [
              {
                id: 10922,
                name: "HUAWEI P50 雪域白",
                info: "骁龙888,4G全网通,原色双影像单元,万象...",
                imgUrl:
                  "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/p50-white.png",
                price: 4488,
                tag: "万象新生",
              },
              {
                id: 10930,
                name: "华为FreeBuds Pro无线耳机",
                info: "主动降噪真无线蓝牙耳机/入耳式耳机/环境音/...",
                imgUrl:
                  "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/freebuds-pro.png",
                price: 749,
                tag: "动态降噪 听我想听",
              },
              {
                id: 10916,
                name: "Apple iPhone 13 Pro 远峰蓝色",
                info: "自适应高刷新率，画面更流畅、响应更灵敏，电影...",
                imgUrl:
                  "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/iphone-13-pro-family-hero.png",
                price: 7999,
                tag: "强得很",
              },
              {
                id: 10927,
                name: "HUAWEI MatePad Pro 12.6英寸",
                info: "8+256GB WIFI曜石灰 麒麟9000...",
                imgUrl:
                  "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/matepad-pro.png",
                price: 4699,
                tag: "创造无界",
              },
              {
                id: 10920,
                name: "MacBook Pro 16英寸 M1 Pro芯片",
                info: "16G 512G 银色。M1Pro和M1Ma...",
                imgUrl:
                  "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/mbp16-silver-select-202110_GEO_CN.jpeg",
                price: 18999,
                tag: "强者的强",
              },
              {
                id: 10929,
                name: "华为 HUAWEI Sound X 2021",
                info: "智能音箱幻彩光随声动",
                imgUrl:
                  "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/soundx.png",
                price: 2199,
                tag: "声声出色",
              },
              {
                id: 10928,
                name: "HUAWEI WATCH 3 Pro智能手表",
                info: "运动智能手表 尊享款 eSIM独立通话强劲续...",
                imgUrl:
                  "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/watch-3-pro.png",
                price: 3899,
                tag: "一表万象",
              },
              {
                id: 10233,
                name: "纪梵希高定香榭天鹅绒唇膏306#",
                info: "(小羊皮口红 法式红 雾面哑光 持久锁色）新...",
                imgUrl:
                  "http://backend-api-01.newbee.ltd/goods-img/04949c0e-87df-445b-96dd-29e7fc69f734.jpg",
                price: 355,
                tag: "雾面哑光 持久锁色",
              },
              {
                id: 10907,
                name: "HUAWEI Mate 40 Pro 全网通5G手机 8GB...",
                info: "5nm麒麟9000旗舰芯片 | 超感光徕卡电...",
                imgUrl:
                  "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/mate40-silver.png",
                price: 6488,
                tag: "跃见非凡",
              },
              {
                id: 10154,
                name: "无印良品 MUJI 塑料浴室座椅",
                info: "原色",
                imgUrl:
                  "http://backend-api-01.newbee.ltd/goods-img/15395057-94e9-4545-a8ee-8aee025f40c5.jpg",
                price: 85,
                tag: "无印良品",
              },
            ],
          };

        default:
          return {
            code: 0,
            message: "success",
            data: [],
          };
      }
    },
  },
] as MockMethod[];
