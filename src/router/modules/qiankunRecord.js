import Layout from '@/layout'
import QiankunRecord from '@/views/Qiankun/record'

export default {
  path: '/qiankun',
  name: 'QianKun',
  component: Layout,
  redirect: '/qiankun/record',
  meta: {title: '乾坤', icon: 'el-icon-menu'},
  children: [
    {
      path: 'record',
      name: 'QiankunRecord',
      component: QiankunRecord,
      meta: {title: '乾坤里的记录', icon: 'el-icon-location'}
    }
  ]
}
