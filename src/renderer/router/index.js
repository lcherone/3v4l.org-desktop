import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/about',
      name: 'about',
      component: require('@/components/AboutPage').default
    },
    {
      path: '/recent',
      name: 'recent',
      component: require('@/components/RecentPage').default
    },
    {
      path: '/search',
      name: 'search',
      component: require('@/components/SearchPage').default
    },
    {
      path: '/editor',
      name: 'editor',
      component: require('@/components/EditorPage').default
    },
    {
      path: '/codepad',
      name: 'codepad',
      component: require('@/components/CodepadPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
