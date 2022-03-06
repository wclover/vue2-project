import record from '@/router/modules/record'
import table from '@/router/modules/table'
import qiankunRecord from '@/router/modules/qiankunRecord'

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
  table,
  qiankunRecord,
  {
    path: '/*',
    redirect: '/404'
  }
]

export default [...constantRoutes, ...asyncRoutes]
