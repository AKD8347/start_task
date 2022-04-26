import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/components/baseWrapper/BaseWrapper'),
    children: [{
      path: '/',
      name: 'home',
      component: () => import('@/views/home/Home')
    }, {
      path: '/task1',
      name: 'task1',
      component: () => import('@/views/task1/Task1')
    }, {
      path: '/task2',
      name: 'task2',
      component: () => import('@/views/task2/Task2')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
