import Vuex from 'vuex';
import Vue from 'vue';

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

const mutations = {};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
