import { createRouter, createWebHashHistory } from 'vue-router'
import Signin from './Signin'
import Mypage from './Mypage'
import NotFound from './NotFound'
import Main from './Main'
import Tent from './items/Tent'
import Shelter from './items/Shelter'
import SleepingBag from './items/SleepingBag'
import Table from './items/Table'
import Stove from './items/Stove'
import Lantern from './items/Lantern'
import Etc from './items/etc'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Signin,
    },
    {
      path: '/main',
      component: Main,
    },
    {
      path: '/mypage',
      component: Mypage,
    },
    {
      path: '/tent',
      component: Tent,
    },
    {
      path: '/shelter',
      component: Shelter,
      },
    {
      path: '/sleepingbag',
      component: SleepingBag,
      },
    {
      path: '/table',
      component: Table,
      },
    {
      path: '/stove',
      component: Stove,
      },
    {
      path: '/lantern',
      component: Lantern,
      },
    {
      path: '/etc',
      component: Etc,
    },
    {
      path: '/:notfound(.*)' ,
      component: NotFound,
    },
  ]
})