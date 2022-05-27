import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/homeView'
  },
  {
    path: '/homeView',
    name: 'HomeViewome',
    component: () => import('../views/HomeView.vue')
  }, {
    path: '/worldView',
    name: 'WorldView',
    component: () => import('../views/WorldView.vue')
  }, {
    path: '/newsView',
    name: 'NewsView',
    component: () => import('../views/NewsView.vue')
  }, {
    path: '/communityView',
    name: 'CommunityView',
    component: () => import('../views/CommunityView.vue')
  }, {
    path: '/characterView',
    name: 'CharacterView',
    component: () => import('../views/CharacterView.vue')
  }, {
    path: '/cartoonView',
    name: 'CartoonView',
    component: () => import('../views/CartoonView.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router