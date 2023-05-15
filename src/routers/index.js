import { createRouter, createWebHistory } from 'vue-router';

import Step1 from '../components/Step1.vue';
import Step2 from '../components/Step2.vue';
import Step3 from '../components/Step3.vue';

const routes = [
  {
    path: '/',
    name: 'root',
    component: Step1,
  },
  {
    path: '/step1',
    name: 'first',
    component: Step1,
  },
  {
    path: '/step2',
    name: 'second',
    component: Step2,
  },
  {
    path: '/step3',
    name: 'third',
    component: Step3,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;