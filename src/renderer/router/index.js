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
      name: 'bookcase',
      components: {
        shell: require('@/components/Shell').default,
        view: require('@/components/Bookcase').default
      },
      meta: {
        // 是否储存页面信息
        keepAlive: false
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
      path: '/reading',
      name: 'reading',
      components: {
        shell: require('@/components/Shell').default,
        view: require('@/components/Reading').default
      },
      meta: {
        keepAlive: true
      }
    }
  ]
})
