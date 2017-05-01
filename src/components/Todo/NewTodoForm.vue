<template>
<div>
  <form @submit.prevent="addTodo($event.target.todo.value)">
    <md-input-container>
      <label>タスク名</label>
      <md-input placeholder=" Todo名をここに入力するよー" name="todo"></md-input>
    </md-input-container>
  </form>
</div>
</template>

<script>
import {
  mapActions,
} from 'vuex';

export default {
  methods: {
    ...mapActions([
      'addTodo'
    ])
  }
}
</script>
