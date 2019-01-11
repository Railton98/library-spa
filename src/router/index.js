import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// publications
import PublicationsList from '@/components/Publications/List'
import PublicationsCreate from '@/components/Publications/Create'
import PublicationShow from '@/components/Publications/Show'
import PublicationUpdate from '@/components/Publications/Update'
// users
import UsersLogin from '@/components/Users/Login'
import UsersRegister from '@/components/Users/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    // publications
    { path: '/publications', name: 'PublicationsList', component: PublicationsList },
    { path: '/publications/new', name: 'PublicationsCreate', component: PublicationsCreate },
    { path: '/publication/:id', name: 'PublicationShow', component: PublicationShow },
    { path: '/publication/:id/edit', name: 'PublicationUpdate', component: PublicationUpdate },
    // users
    { path: '/login', name: 'UsersLogin', component: UsersLogin },
    { path: '/register', name: 'UsersRegister', component: UsersRegister }
  ]
})
