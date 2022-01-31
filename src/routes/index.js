import { createRouter, createWebHashHistory } from 'vue-router'
import Signin from './Signin'
import Mypage from './Mypage'
import NotFound from './NotFound'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Signin,
    },
    {
      path: '/mypage',
      component: Mypage,
    },
    {
      path: '/:notfound(.*)' ,
      component: NotFound,
    },
  ]
})