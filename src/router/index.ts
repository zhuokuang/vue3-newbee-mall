import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/pages/home/index.vue"),
    meta: {
      level: 1,
      nav: true,
      // 使用 vant 组件库图标字体，icon 为图标字体名称
      icon: "wap-home-o",
      activeIcon: "wap-home",
      title: "主页",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login/index.vue"),
    meta: {
      level: 1,
    },
  },
  {
    path: "/category",
    name: "category",
    component: () => import("@/pages/category/index.vue"),
    meta: {
      level: 1,
      nav: true,
      icon: "more-o",
      activeIcon: "more",
      title: "分类",
    },
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/pages/Cart.vue"),
    meta: {
      level: 1,
      nav: true,
      icon: "cart-o",
      activeIcon: "cart",
      title: "购物车",
    },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/pages/User.vue"),
    meta: {
      level: 1,
      nav: true,
      icon: "manager-o",
      activeIcon: "manager",
      title: "我的",
    },
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/pages/search/index.vue"),
    meta: {
      level: 2,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const NavRoutes = routes.filter((route) => route.meta?.nav);

export default router;
