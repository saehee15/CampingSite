import { createRouter, createWebHashHistory } from 'vue-router'
import Signin from './Signin'
import Mypage from './Mypage'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Signin,
    },
    {
      path: '/my-page',
      component: Mypage,
    }
  ]
})