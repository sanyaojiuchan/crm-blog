import Vue from 'vue'
import VueRouter from 'vue-router'
import AricleList from '../views/AricleList'
import CreateArticle from '../views/CreateArticle'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/article/index'
  },
  {
    path: '/article/index',
    name: 'lists',
    component: AricleList
  },
  {
    path: '/article/create',
    name: 'create',
    component: CreateArticle
  },
  
]

const router = new VueRouter({
  routes
})

export default router
