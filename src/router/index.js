import Vue from 'vue'
import VueRouter from 'vue-router'
// i/mport NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'
import Intro from '../views/Intro.vue'
import Register from '../views/Register.vue'
import Details from '../views/Details.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin'
import GroupAdmin from '../views/GroupAdmin'
import ResumeConfig from '../views/ResumeConfig'
import ResumeReview from '../views/ResumeReview'
import AdminHome from '../views/AdminHome'
import RegisterAccount from '../views/RegisterAccount'
import GroupDescription from '../views/GroupDescription'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    component: Home
  },
  {
    path: '/intro',
    name: '简介',
    component: Intro
  },
  {
    path: '/resume',
    name: '加入',
    component: Register
  },
  {
    path: '/details',
    name: '小组详情',
    component: Details
  },
  {
    path: '/login',
    name: '登入',
    component: Login
  },
  {
    path: '/register',
    name: '注册',
    component: RegisterAccount
  },
  {
    path: '/admin',
    component: Admin,
    redirect: '/admin/home',
    children: [
      {
        path: '/admin/home',
        name: '管理主页',
        component: AdminHome,
      },
      {
        path: '/admin/admin',
        name: '行政管理',
        component: GroupAdmin,
      },
      {
        path: '/admin/resume',
        name: '简历编辑',
        component: ResumeConfig,
      },
      {
        path: '/admin/check',
        name: '简历浏览',
        component: ResumeReview,
      },
      {
        path: '/admin/group',
        name: '介绍管理',
        component: GroupDescription,
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/admin/*',
    redirect: '/admin/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
