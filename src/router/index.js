import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('../views/Admin/ListUser.vue')
    },
    {
      path: '/add-user',
      name: 'AddUser',
      component: () => import('../views/Admin/AddUser.vue')
    },
    {
      path: '/edit-user/:id',
      name: 'EditUser',
      component: () => import('../views/Admin/AddUser.vue')
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: () => import('../views/User/ListTasks.vue')
    },
    {
      path: '/edit-task/:id/:userId',
      name: 'EditTask',
      component: () => import('../views/User/EditTask.vue')
    }
  ]
})
// console.log(router)
export default router
