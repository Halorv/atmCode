import { createRouter, createWebHashHistory } from "vue-router";
import login from "./components/pages/login.vue";
import choice from "./components/pages/choice.vue"
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: login,
    },
    {
        path:"/choice",
        component:choice,
    }
  ],
});
export default router;
