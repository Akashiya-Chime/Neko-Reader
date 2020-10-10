import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      // 重定向
      path: '*',
      redirect: '/'
    },
    {
      // 引导页
      path: '/',
      name: 'home-page',
      component: require('@/components/HomePage').default
    }
    // {
    //   path: '/setting-page',
    //   name: 'setting-page',
    //   component: require('@/components/SettingPage').default
    // }
  ]
})
