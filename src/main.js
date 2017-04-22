// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App'
import TodoList from './components/TodoList'
import NewTodoForm from './components/NewTodoForm'
import store from './vuex/store'
Vue.config.productionTip = false
Vue.use(VueMaterial)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App,
    TodoList
  }
})
