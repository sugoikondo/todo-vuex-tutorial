<template>
<div id="app">
  <side-nav></side-nav>
  <div class="main-content">
    <category></category>
    <new-todo-form></new-todo-form>
    <todo-list></todo-list>
  </div>
</div>
</template>

<script>
import TodoList from './components/TodoList'
import NewTodoForm from './components/NewTodoForm'
import SideNav from './components/Sidenav'
import Category from './components/Category'

export default {
  name: 'app',
  components: {
    SideNav,
    TodoList,
    NewTodoForm,
    Category
  }
}
</script>

<style>
.main-content {
  margin: 16px;
}
</style>
