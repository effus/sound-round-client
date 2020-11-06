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
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "test" */ '../views/TheTestView.vue')
  },
  {
    path: '/test/user/:user',
    name: 'TestUser',
    component: () => import(/* webpackChunkName: "test" */ '../views/TheTestView.vue')
  },
  {
    path: '/test/midi',
    name: 'Midi',
    component: () => import(/* webpackChunkName: "test" */ '../views/TheMidiView.vue')
  },
  {
    path: '/test/audio',
    name: 'Audio',
    component: () => import(/* webpackChunkName: "test" */ '../views/TheAudioView.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
