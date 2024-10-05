import { createRouter, createWebHistory } from 'vue-router'

import TrueOrFalse from './components/TrueOrFalse.vue'
import MultipleChoice from './components/MultipleChoice.vue'


const routes = [
  { path: '/TrueOrFalse', name: 'TrueOrFalse', component: TrueOrFalse },
  { path: '/MultipleChoice', name: 'MultipleChoice', component: MultipleChoice },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
