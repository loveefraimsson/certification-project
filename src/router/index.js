import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleProjectView from '@/views/SingleProjectView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects/:id',
    name: 'singleproject',
    component: SingleProjectView
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
