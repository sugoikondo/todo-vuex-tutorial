<template>
<div class="card">
  <div class="card-content">
    <div class="card-title">{{todo.name}}</div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    todo: Object
  }
}
</script>

<style lang="css">
</style>
