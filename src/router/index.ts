import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/pages/Home.vue"),
    meta: {
      level: 1,
      nav: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/Login.vue"),
    meta: {
      level: 1,
      nav: true,
    },
  },
  {
    path: "/category",
    name: "category",
    component: () => import("@/pages/Category.vue"),
    meta: {
      level: 1,
      nav: true,
    },
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/pages/Cart.vue"),
    meta: {
      level: 1,
      nav: true,
    },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/pages/User.vue"),
    meta: {
      level: 1,
      nav: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const NavRoutes = routes.filter((route) => route.meta?.nav);

export default router;
