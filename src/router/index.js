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
