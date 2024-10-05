import { createRouter, createWebHistory } from 'vue-router'

import TrueOrFalse from './components/TrueOrFalse.vue'
import MemoryCards from './components/MemoryCards.vue'


const routes = [
  { path: '/TrueOrFalse', name: 'TrueOrFalse', component: TrueOrFalse },
  { path: '/MemoryCards', name: 'MemoryCards', component: MemoryCards },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
