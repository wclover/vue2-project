import record from '@/router/modules/record'

export const constantRoutes = [
  {
    path: '/',
    redirect: '/record'
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/404',
    component: () => import('@/views/404')
  }
]

export const asyncRoutes = [
  record,
  {
    path: '/*',
    redirect: '/404'
  }
]

export default [...constantRoutes, ...asyncRoutes]
