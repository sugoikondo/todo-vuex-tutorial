import Vuex from 'vuex';
import Vue from 'vue';
import Moment from 'moment'

Vue.use(Vuex);

const state = {
  todos: [],
};

const actions = {
  addTodo({
    commit
  }, name) {
    commit('addTodo', name)
  },

  deleteTodo({
    commit
  }, todo) {
    commit('deleteTodo', todo)
  }
};

const getters = {};

const mutations = {
  addTodo(state, name) {
    state.todos.push({
      name: name
    })
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
