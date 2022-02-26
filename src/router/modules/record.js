import Layout from '@/layout'

export default {
  path: '/record',
  name: 'Record',
  component: Layout,
  redirect: '/record/index',
  meta: {title: '记录中心', icon: 'el-icon-menu'},
  children: [
    {
      path: 'index',
      name: 'RecordIndex',
      component: () => import('@/views/RecordIndex'),
      meta: {title: '流程', icon: 'el-icon-location'}
    },
    {
      path: 'test',
      name: 'RecordTest',
      component: () => import('@/views/RecordIndex/Test'),
      meta: {title: '测试', icon: 'el-icon-document'},
      children: [
        {
          path: 'index',
          name: 'TestIndex',
          component: () => import('@/views/RecordIndex'),
          meta: {title: '测试中心', icon: 'el-icon-menu'}
        }
      ]
    }
  ]
}
