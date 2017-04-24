<template>
<div>
  <md-toolbar>
    <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
      <md-icon>menu</md-icon>
    </md-button>
    <h2 class="md-title">TODO | index</h2>
  </md-toolbar>
  <md-sidenav class="md-left" ref="leftSidenav">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <h3 class="md-title">メニュー</h3>
      </div>
    </md-toolbar>
    <p class="sidenav-content">慣れると結構使いやすいなコレ。ただes2015使えないと使うのが面倒だなとも思う。</p>
  </md-sidenav>
</div>
</template>

<script>
export default {
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    }
  }
}
</script>

<style lang="css">
.sidenav-content {
  margin: 16px;
}
</style>
