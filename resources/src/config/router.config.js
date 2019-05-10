// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'
import {isMobile} from "@/utils/util";

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/account',
    children: [
      // other
      {
        path: '/account',
        name: 'accountManage',
        component: PageView,
        meta: { title: '用户管理', icon: 'team' },
        redirect: '/account/users',
        children: [
          {
            path: '/account/users',
            name: 'UserList',
            component: () => import("@views/account/user/List"),
            meta: { title: '用户列表', keepAlive: true },
          },
          {
            path: '/account/roles',
            name: 'RoleList',
            component: () => import('@views/account/role/List'),
            meta: { title: '角色列表' }
          },
          {
            path: '/account/permissions',
            name: 'PermissionList',
            component: () => import('@views/account/permission/List'),
            meta: { title: '菜单列表' }
          }
        ]
      }
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      }
    ]
  },

  {
    path: '/test',
    component: BlankLayout,
    redirect: '/test/home',
    children: [
      {
        path: 'home',
        name: 'TestHome',
        component: () => import('@/views/Home')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
