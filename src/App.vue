<template>
<div id="app">
  <div class="row">
    <new-todo-form></new-todo-form>
    <todo-list></todo-list>
  </div>
</div>
</template>

<script>
import TodoList from './components/TodoList'
import NewTodoForm from './components/NewTodoForm'

export default {
  name: 'app',
  el: '#app',
  components: {
    TodoList,
    NewTodoForm
  }
}
</script>

<style>
#app {}
</style>
