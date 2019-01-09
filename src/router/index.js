import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PublicationsList from '@/components/Publications/List'
import PublicationsCreate from '@/components/Publications/Create'
import PublicationShow from '@/components/Publications/Show'
import PublicationUpdate from '@/components/Publications/Update'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/publications', name: 'PublicationsList', component: PublicationsList },
    { path: '/publications/new', name: 'PublicationsCreate', component: PublicationsCreate },
    { path: '/publication/:id', name: 'PublicationShow', component: PublicationShow },
    { path: '/publication/:id/edit', name: 'PublicationUpdate', component: PublicationUpdate }
  ]
})
