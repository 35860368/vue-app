// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// 引入vue-router
import VueRouter from 'vue-router';
// 引入vue-resource
import VueResource from 'vue-resource';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import sellers from './components/seller/sellers';

import 'common/sass/index.scss';

// Vue注册组件
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes: [
    { path: '/',
      component: App,
      children: [
        {
          path: '/goods',
          component: goods
        },
        {
          path: '/ratings',
          component: ratings
        },
        {
          path: '/seller',
          component: sellers
        }
      ]
    }
  ]
});

const app = new Vue({
  el: '#app',
  router: router,
  template: '<router-view></router-view>'
});
