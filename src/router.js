import { createRouter, createWebHashHistory } from "vue-router";
import login from "./components/pages/login.vue";
import choice from "./components/pages/choice.vue"
import deposit from "./components/pages/deposit.vue"
import withdraw from "./components/pages/withdraw.vue"
import cardReturn from "./components/pages/cardReturn.vue"
import queryBalance from "./components/pages/queryBalance.vue"
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
    },
    {
        path:"/deposit",
        component:deposit
    },
    {
        path:"/withdraw",
        component:withdraw
    },
    {
      path:"/card-return",
      component:cardReturn
    },
    {
      path:"/queryBalance",
      component:queryBalance
    },
  ],
});
export default router;
