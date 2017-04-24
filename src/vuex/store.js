import Vuex from 'vuex';
import Vue from 'vue';
import moment from 'moment';

Vue.use(Vuex);

const state = {
  todos: [{
      id: 0,
      name: 'テストのTODO',
      createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
    },
    {
      id: 1,
      name: '宿題終わらせないと',
      createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
    }
  ],
  todoName: '',
};

const actions = {
  addTodo({
    commit,
  }, name) {
    commit('addTodo', {
      name: name,
      createdAt: moment().format('MMMM Do YYYY, h:mm:ss a')
    })
  },

  deleteTodo({
    commit,
  }, todo) {
    commit('deleteTodo', todo);
  },
};

const getters = {};

const mutations = {
  addTodo(state, todo) {
    state.todos.push({
      id: state.todos.length,
      name: todo.name,
      createdAt: todo.createdAt,
    });
  },
  deleteTodo(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
