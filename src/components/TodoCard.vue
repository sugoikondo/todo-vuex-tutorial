<template>
<md-card>
  <md-card-header>
    <div class="md-title">{{todo.name}}</div>
    <div class="md-subhead">作成日: {{todo.createdAt}}</div>
  </md-card-header>
</md-card>
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
