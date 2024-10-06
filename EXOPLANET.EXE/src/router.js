import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './views/HomePage.vue'
import TrueOrFalse from './components/TrueOrFalse.vue'
import IntermediateLessons from './views/IntermediateLessons.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage},
  { path: '/TrueOrFalse', name: 'TrueOrFalse', component: TrueOrFalse },
  { path: '/IntermediateLessons', name: 'IntermediateLessons', component: IntermediateLessons}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
