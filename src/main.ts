import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { Icon } from "vant";
import "@/common/style/normalize.css";

createApp(App).use(Icon).use(router).mount("#app");
