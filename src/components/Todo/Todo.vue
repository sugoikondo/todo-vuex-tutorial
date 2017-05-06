<template>
<div>
  <new-todo-form></new-todo-form>
  <todo-list></todo-list>
  <router-link to="/categories">カテゴリ一一覧に戻る</router-link>
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
