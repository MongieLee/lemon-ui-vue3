import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import Lemon from "./components/Lemon.vue";
import { createWebHashHistory, createRouter } from "vue-router";
const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Lemon,
    },
  ],
});
const app = createApp(App);
app.use(router);
app.mount("#app");
