// qiankun.setup.js
import { start, registerMicroApps, initGlobalState } from 'qiankun'
import { Loading } from 'element-ui'
import router from '@/router'
import { qiankunApps } from './qiankun.app'

function register() {
  let load
  registerMicroApps(
    qiankunApps,
    {
      beforeLoad: app => {
        load = Loading.service()
        return Promise.resolve()
      },
      afterMount: app => {
        load.close()
        return Promise.resolve()
      }
    }
  )
  startRender()
}

const action = initGlobalState({ router: {}})

action.onGlobalStateChange(async(state) => {
  if (state.router.isActive === true) {
    try {
      await router.push({ name: state.router.name, params: state.router.params })
      action.setGlobalState({ router: { isActive: false }})

      // eslint-disable-next-line no-empty
    } catch {

    }
  }
})
function startRender() {
  return start({
    fetch(url, ...args) {
      // Loading.service();
      return window.fetch(url, ...args)
    },
    sandbox: { experimentalStyleIsolation: true }
  })
}
export { start, register, action, startRender }
