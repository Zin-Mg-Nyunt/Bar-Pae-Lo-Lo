import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductCreate from '@/views/ProductCreate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products/:id',
      name: 'detail',
      component: HomeView,
      props: true,
    },
    {
      path: '/products',
      name: 'query',
      component: HomeView,
    },
    {
      path: '/create',
      name: 'create',
      component: ProductCreate,
    },
  ],
})

export default router
