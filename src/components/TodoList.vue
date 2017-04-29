<template>
<div>
  <todo-card v-for="todo in currentCategoryTodos(1)" :todo="todo" :key="todo.id"></todo-card>
</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'
import TodoCard from './TodoCard'

export default {
  components: {
    TodoCard
  },
  computed: {
    ...mapGetters([
      'currentCategoryTodos'
    ])
  }
}
</script>

<style>
.md-card {
  margin: 16px 0;
}
</style>
