<template>
<div class="row">
  <todo-card v-for="todo in $store.state.todos" :todo="todo" :key="todo.id"></todo-card>
</div>
</template>

<script>
import TodoCard from './TodoCard'

export default {
  components: {
    TodoCard
  }
}
</script>

<style>
.md-card {
  margin: 16px 0;
}
</style>
