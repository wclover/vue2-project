<template>
  <div class="app_layout">
    <side-bar />
    <div class="app_layout_main">
      <nav-bar />
      <!--      <tags-view />-->
      <div v-show="isQiankun" id="qiankun" />
      <app-main v-show="!isQiankun" />
    </div>
  </div>
</template>

<script>
import NavBar from '@/layout/NavBar/index'
import SideBar from '@/layout/SideBar/index'
// import TagsView from '@/layout/TagsView/index'
import AppMain from '@/layout/AppMain/index'
import QiankunMixin from './mixin/qiankun'
export default {
  name: 'Layout',
  components: {AppMain, SideBar, NavBar},
  mixins: [QiankunMixin]
}
</script>

<style lang="scss" scoped>
.app_layout {
  height: 100vh;
  width: 100%;
  display: flex;
  .app_layout_main {
    height: calc(100vh - 50px );
    width: 100%;
  }
}
</style>
