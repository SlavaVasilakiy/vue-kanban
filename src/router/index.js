import { createRouter, createWebHistory } from 'vue-router'
import KanbanBoard from '../views/KanbanBoard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'KanbanBoard',
      component: KanbanBoard
    }
  ]
})

export default router
