import { createRouter, createWebHistory } from 'vue-router'

import TrueOrFalse from './components/TrueOrFalse.vue'


const routes = [
  { path: '/TrueOrFalse', name: 'TrueOrFalse', component: TrueOrFalse },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
