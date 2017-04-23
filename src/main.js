// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMaterial from 'vue-material';
import moment from 'moment';
import App from './App.vue';
import TodoList from './components/TodoList.vue';
import NewTodoForm from './components/NewTodoForm.vue';
import store from './vuex/store';


Vue.config.productionTip = false;
Vue.use(VueMaterial);

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  template: '<App />',
  components: {
    App,
    NewTodoForm,
    TodoList,
  },
});
