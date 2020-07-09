import Vue from 'vue'
import VueRouter from 'vue-router'
import AricleList from '../views/AricleList'
import CreateArticle from '../views/CreateArticle'
import EditArticle from '../views/EditArticle'

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
  {
    path: '/article/:id/edit',
    name: 'edit',
    component: EditArticle
  },
  
]

const router = new VueRouter({
  routes
})

export default router

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}