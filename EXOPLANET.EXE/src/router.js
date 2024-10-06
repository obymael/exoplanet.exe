import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './views/HomePage.vue';
import TrueOrFalse from './components/TrueOrFalse.vue';
import IntermediateLessons from './views/IntermediateLessons.vue';
import LearnMore1 from './views/LearnMore1.vue'; // Import the new component

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/TrueOrFalse', name: 'TrueOrFalse', component: TrueOrFalse },
  { path: '/IntermediateLessons', name: 'IntermediateLessons', component: IntermediateLessons },
  { path: '/learn-more', name: 'LearnMore1', component: LearnMore1 } // New route for LearnMore1
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
