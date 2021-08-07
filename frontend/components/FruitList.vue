<template>
  <div class="container">
    <h3>Fruit List</h3>
    <v-client-table :data="fruits" :columns="columns" :options="options" />
  </div>
</template>

<script>
export default {
  name: 'FruitList',
  data () {
    return {
      fruits: [],
      columns: ['id', 'name', 'price', 'qty'],
      options: {
        filterByColumn: true
      }
    }
  },
  async mounted () {
    this.fruits = (await this.$axios.get('fruits')).data
  }
}
</script>

<style scoped>

</style>
