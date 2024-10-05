import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './views/HomePage.vue'
import TrueOrFalse from './components/TrueOrFalse.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage},
  { path: '/TrueOrFalse', name: 'TrueOrFalse', component: TrueOrFalse },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
