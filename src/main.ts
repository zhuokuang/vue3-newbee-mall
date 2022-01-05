import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "@/common/style/base.less";

createApp(App).use(router).mount("#app");
