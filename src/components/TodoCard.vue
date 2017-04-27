<template>
<md-card>
  <md-card-header>
    <md-card-header-text>
      <div class="md-title">{{todo.name}}</div>
      <div class="md-subhead">作成日: {{todo.createdAt}}</div>

    </md-card-header-text>
    <md-menu md-size="4" md-direction="bottom left">
      <md-button class="md-icon-button" md-menu-trigger>
        <md-icon>more_vert</md-icon>
      </md-button>

      <md-menu-content>
        <md-menu-item>
          <md-icon>close</md-icon>
          <span>削除</span>
        </md-menu-item>

        <md-menu-item>
          <md-icon>edit</md-icon>
          <span>編集</span>
        </md-menu-item>
      </md-menu-content>
    </md-menu>
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
