import { createApp } from "vue";
import App from "./App.vue";
import "./index.scss";
import Home from "./views/Home.vue";
import Doc from "./views/Docs.vue";
import { createWebHashHistory, createRouter } from "vue-router";
const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/doc",
      component: Doc,
    },
  ],
});
const app = createApp(App);
app.use(router);
app.mount("#app");
