import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import Content from '@/views/content/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detials/:id',
      name: 'detials',
      component: Content
    }
  ]
})
