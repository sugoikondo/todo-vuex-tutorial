<template>
<div id="app">
  <side-nav></side-nav>
  <div class="main-content">
    <!-- <category></category> -->
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import TodoList from './components/Todo/TodoList'
import NewTodoForm from './components/Todo/NewTodoForm'
import SideNav from './components/Sidenav'
import Category from './components/Category'

export default {
  name: 'app',
  components: {
    SideNav,
    TodoList,
    NewTodoForm,
    Category
  }
}
</script>

<style>
.main-content {
  margin: 16px;
}
</style>
