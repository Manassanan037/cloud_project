import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Center from '../views/Center.vue'
import Clip from '../views/Clip.vue'

const routes = [
    {
        path: '/',
        name: 'Center',
        component: Center
    },

    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/clip',
        name: 'Clip',
        component: Clip
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes // short for `routes: routes`
  });
  
export default router