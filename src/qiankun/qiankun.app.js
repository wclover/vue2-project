// qiankun.app.js
export const qiankunApps = [
  {
    name: 'qiankun',
    entry: process.env.VUE_APP_QIANKUN_URL,
    container: '#qiankun',
    activeRule: genActiveRule('/qiankun')
  }
]

function genActiveRule(routerPrefix) {
  return location => location.hash.includes(routerPrefix)
}
