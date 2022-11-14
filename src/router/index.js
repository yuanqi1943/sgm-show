import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * Layout 页面结构组件
 * 可以引用不同的Layout
 */
import Layout from '@/layout'

/**
 * Router Modules 
 * 
 */

/**
 * constantRoutes 固定的路由
 * a base page that does not have permission requirements 不需要权限访问
 * all roles can be accessed
 */

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect:'/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
      },
      {
        path: '/drivingBehavior',
        name: 'drivingBehavior',
        component: () => import('@/views/drivingBehavior/index'),
      },
      {
        path: '/userPortrait',
        component: () => import('@/views/userPortrait/index'),
        name: 'UserPortrait',
        meta: { title: 'UserPortrait', icon: 'userPortrait' }
      },
      {
        path: '/chargeFeature',
        component: () => import('@/views/chargeFeature/index'),
        name: 'ChargeFeature',
      },
      {
        path: '/hotmap',
        component: () => import('@/views/hotmap/index'),
        name: 'hotmap',
      },
      {
        path: '/permission',
        component: () => import('@/views/permission/index'),
        name: 'permission',
      },
    ]
  },
]



const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
