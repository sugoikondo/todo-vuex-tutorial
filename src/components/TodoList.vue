<template>
<div class="row">
  <card v-for="todo in todos" :todo="todo" :key="todo.id"></card>
</div>
</template>

<script>
export default {}
</script>

<style>

</style>
