<template>
<div id="app">
  <side-nav></side-nav>
  <div class="main-content">
    <new-todo-form></new-todo-form>
    <todo-list></todo-list>
  </div>
</div>
</template>

<script>
import TodoList from './components/TodoList'
import NewTodoForm from './components/NewTodoForm'
import SideNav from './components/Sidenav'

export default {
  name: 'app',
  components: {
    SideNav,
    TodoList,
    NewTodoForm
  }
}
</script>

<style>
.main-content {
  margin: 16px;
}
</style>
