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
      components: {
        shell: require('@/components/Shell').default,
        view: require('@/components/HomePage').default
      }
    },
    {
      path: '/setting',
      name: 'setting',
      components: {
        shell: require('@/components/Shell').default,
        view: require('@/components/SettingPage').default
      }
    },
    {
      path: '/bookcase',
      name: 'bookcase',
      components: {
        shell: require('@/components/Shell').default,
        view: require('@/components/BookCase.vue').default
      }
    }
  ]
})
