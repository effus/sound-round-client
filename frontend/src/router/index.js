'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import IndexView from '../views/TheIndexView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/TheAboutView.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
