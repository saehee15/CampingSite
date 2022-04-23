import { createRouter, createWebHashHistory } from "vue-router";
import Signin from "./Signin";
import Mypage from "./Mypage";
import NotFound from "./NotFound";
import Main from "./Main";
import Tent from "./items/Tent";
import Shelter from "./items/Shelter";
import SleepingBag from "./items/SleepingBag";
import Table from "./items/Table";
import Stove from "./items/Stove";
import Lantern from "./items/Lantern";
import Etc from "./items/etc";
import Detail from "./Detail";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Signin,
    },
    {
      path: "/main",
      component: Main,
    },
    {
      path: "/mypage",
      component: Mypage,
    },
    {
      path: "/items/tent",
      component: Tent,
    },
    {
      path: "/items/shelter",
      component: Shelter,
    },
    {
      path: "/items/sleepingbag",
      component: SleepingBag,
    },
    {
      path: "/items/table",
      component: Table,
    },
    {
      path: "/items/stove",
      component: Stove,
    },
    {
      path: "/items/lantern",
      component: Lantern,
    },
    {
      path: "/items/etc",
      component: Etc,
    },
    {
      path: "/items/tent/:id",
      component: Detail,
    },
    {
      path: "/:notfound(.*)",
      component: NotFound,
    },
  ],
});
