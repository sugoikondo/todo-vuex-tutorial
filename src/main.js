// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMaterial from 'vue-material';
import VueWebsocket from 'vue-websocket';
import {
  sync,
} from 'vuex-router-sync';
import VueRouter from 'vue-router';
import App from './App.vue';
import TodoList from './components/TodoList.vue';
import NewTodoForm from './components/NewTodoForm.vue';
import store from './vuex/store';
import {
  routes,
} from './vuex/router-config';

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.use(VueWebsocket);

const router = new VueRouter({
  routes,
  mode: 'history',
});

sync(store, router);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  template: '<App />',
  components: {
    App,
    NewTodoForm,
    TodoList,
  },
});
