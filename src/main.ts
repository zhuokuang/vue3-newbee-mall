import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "amfe-flexible";
import "@/common/style/normalize.css";
import {
  Icon,
  Button,
  Form,
  Field,
  CellGroup,
  Toast,
  Swipe,
  SwipeItem,
  Search,
  Divider,
  Sidebar,
  SidebarItem,
} from "vant";

createApp(App)
  .use(Icon)
  .use(Form)
  .use(Field)
  .use(CellGroup)
  .use(Button)
  .use(Swipe)
  .use(SwipeItem)
  .use(Search)
  .use(Divider)
  .use(Sidebar)
  .use(SidebarItem)
  .use(Toast)
  .use(router)
  .mount("#app");
