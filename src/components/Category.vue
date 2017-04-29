<template>
<md-table-card>
  <md-subheader>カテゴリリスト</md-subheader>
  <md-table>
    <md-table-header>
      <md-table-row>
        <md-table-head>カテゴリ名</md-table-head>
      </md-table-row>
    </md-table-header>
    <md-table-body>
      <md-table-row v-for="category in $store.state.categories" :key="category.name">
        <md-table-cell @click.native="changeCurrentCategory(category.id)">{{category.name}}</md-table-cell>
      </md-table-row>
    </md-table-body>
  </md-table>
</md-table-card>
</template>

<script>
import {
  mapActions
} from 'vuex'

export default {
  methods: {
    ...mapActions(['changeCurrentCategory', ]),
  }
}
</script>

<style>
</style>
