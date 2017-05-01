<template>
<md-table-card>
  <md-subheader>現在のカテゴリ: {{$store.state.currentCategory.name}}</md-subheader>
  <md-table>
    <md-table-header>
      <md-table-row>
        <md-table-head>カテゴリ名</md-table-head>
      </md-table-row>
    </md-table-header>
    <md-table-body>
      <md-table-row v-for="category in $store.state.categories" :key="category.name">
        <router-link to="/categories/todos">
          <md-table-cell @click.native="changeCurrentCategory(category)">{{category.name}}</md-table-cell>
        </router-link>
      </md-table-row>
    </md-table-body>
  </md-table>
</md-table-card>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'

export default {
  methods: {
    ...mapActions(['changeCurrentCategory']),
  }
}
</script>

<style>
</style>
