import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Profil from '@/views/Profil.vue'
import Tchat from '@/views/Tchat.vue'
import Category from '@/views/Category.vue'
import Test from '@/views/Test.vue'
import Edit from '@/views/Edit.vue'
import Collection from '@/views/Collection.vue'
import NotFound from '@/views/NotFound.vue'
import logOut from '@/views/logOut.vue'
import LogIn from '@/views/Login.vue'
import SignUp from '@/views/Signup.vue'
import ReviewPage from '@/views/ReviewPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/tchat/:id',
    name: 'Tchat',
    component: Tchat
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/logOut',
    name: 'logOut',
    component: logOut
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/ReviewPage',
    name: ReviewPage,
    component: ReviewPage
  },

  //DEBUG AND TEST AREA
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/collection/:id',
    name: 'Collection',
    component: Collection
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
