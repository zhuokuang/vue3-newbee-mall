import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
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
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/Login.vue"),
    meta: {
      level: 1,
    },
  },
  {
    path: "/category",
    name: "category",
    component: () => import("@/pages/Category.vue"),
    meta: {
      level: 1,
    },
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/pages/Cart.vue"),
    meta: {
      level: 1,
    },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/pages/User.vue"),
    meta: {
      level: 1,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
