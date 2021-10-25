import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Input from '@/views/Input.vue'
import Score from '@/views/Score'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Input
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: Input
  },
  {
    path: '/assessment',
    name: 'assessment',
    component: Input
  },
  {
    path: '/score',
    name: 'Score',
    component: Score
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
