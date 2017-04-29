import Vuex from 'vuex';
import Vue from 'vue';
import moment from 'moment';

Vue.use(Vuex);

const state = {
  todos: [{
      id: 1,
      name: 'テストのTODO',
      createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
      categoryId: 1
    },
    {
      id: 2,
      name: '宿題終わらせないと',
      createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
      categoryId: 2
    }
  ],
  todoName: '',

  categories: [{
      id: 1,
      name: 'カテゴリその１',
    },
    {
      id: 2,
      name: '適当なカテゴリ'
    },
  ],
  currentCategoryId: 1,
};

const actions = {
  addTodo({
    commit,
  }, name) {
    commit('addTodo', {
      name: name,
      categoryId: state.currentCategoryId,
      createdAt: moment().format('MMMM Do YYYY, h:mm:ss a')
    })
  },

  deleteTodo({
    commit,
  }, todo) {
    commit('deleteTodo', {
      todo: todo
    });
  },
  changeCurrentCategory({
    commit,
  }, categoryId) {
    commit('changeCurrentCategory', {
      categoryId: categoryId
    })
  }
};

const getters = {
  currentCategoryTodos: (state, getters) => (categoryId) => {
    if (categoryId == undefined) return state.todos;

    return state.todos.filter((todo) => {
      return (todo.categoryId === categoryId);
    });
  }
};

const mutations = {
  addTodo(state, todo) {
    state.todos.push({
      id: state.todos.length,
      name: todo.name,
      createdAt: todo.createdAt,
      categoryId: todo.categoryId,
    });
  },
  deleteTodo(state, todo) {
    state.todos.splice(state.todos.indexOf(todo.todo), 1);
  },
  changeCurrentCategory(state, categoryId) {
    state.currentCategoryId = categoryId.categoryId;
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
