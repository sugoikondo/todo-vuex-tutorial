<template>
<div id="app">
  <md-toolbar>
    <h1 class="md-title">My Title</h1>
  </md-toolbar>
  <new-todo-form></new-todo-form>
  <todo-list></todo-list>
</div>
</template>

<script>
import TodoList from './components/TodoList'
import NewTodoForm from './components/NewTodoForm'

export default {
  name: 'app',
  components: {
    TodoList,
    NewTodoForm
  }
}
</script>
