import { action, register } from '@/qiankun/qiankun.setup'

export default {
  computed: {
    // 判断展示微应用or主应用
    isQiankun() {
      return this.$route.path.includes('qiankun')
    }
  },
  watch: {
    // 通知微应用路由信息
    '$route.name': {
      immediate: true,
      handler(v) {
        action.setGlobalState({ name: v })
      }
    }
  },
  async mounted() {
    // 注册微应用
    register()
  }
}
