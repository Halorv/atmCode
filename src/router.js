import { createRouter, createWebHashHistory } from "vue-router";
import login from "./components/pages/login.vue";
import choice from "./components/pages/choice.vue"
import deposit from "./components/pages/deposit.vue"
import withdraw from "./components/pages/withdraw.vue"
import cardReturn from "./components/pages/cardReturn.vue"
import queryBalance from "./components/pages/queryBalance.vue"
import queryDetails from "./components/pages/queryDetails.vue"
import transfer from "./components/pages/transfer.vue"
import modifyPassword from "./components/pages/modifyPassword.vue"
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: login,
    },
    {
        path:"/choice-info",
        component:choice,
    },
    {
        path:"/deposit-info",
        component:deposit
    },
    {
        path:"/withdraw-info",
        component:withdraw
    },
    {
      path:"/cardReturn-info",
      component:cardReturn
    },
    {
      path:"/queryBalance-info",
      component:queryBalance
    },
    {
      path:"/queryDetails-info",
      component:queryDetails
    },
    {
      path:"/transfer-info",
      component:transfer
    },
    {
      path:"/modifyPassword-info",
      component:modifyPassword
    }
  ],
});
export default router;
