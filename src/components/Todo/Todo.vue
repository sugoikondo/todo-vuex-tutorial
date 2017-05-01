<template>
<div>
  <new-todo-form></new-todo-form>
  <todo-list></todo-list>
</div>
</template>

<script>
import TodoCard from './TodoCard.vue';
import NewTodoForm from './NewTodoForm.vue'
import TodoList from './TodoList.vue';

export default {
  components: {
    TodoCard,
    TodoList,
    NewTodoForm,
  }
}
</script>

<style>
</style>
