import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "amfe-flexible";
import "@/common/style/normalize.css";
import { Icon, Button, Form, Field, CellGroup } from "vant";

createApp(App)
  .use(Icon)
  .use(Form)
  .use(Field)
  .use(CellGroup)
  .use(Button)
  .use(router)
  .mount("#app");
