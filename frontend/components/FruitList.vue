<template>
  <div class="container">
    <h3>Fruit List</h3>
    <v-client-table :data="fruits" :columns="columns" :options="options" >
        <template v-slot:actions="props">
          <nuxt-link :to="'/fruits/' + props.row.id + '/edit'">
            <i class="fas fa-edit"></i>
          </nuxt-link>
        </template>
    </v-client-table>
  </div>
</template>

<script>
export default {
  name: 'FruitList',
  data () {
    return {
      fruits: [],
      columns: ['actions', 'id', 'name', 'price', 'qty'],
      options: {
        filterByColumn: true
      }
    }
  },
  async mounted () {
    this.fruits = (await this.$axios.get('fruits')).data
  },
  methods: {
    edit(data) {
      return "/contact";
    }
  }
}
</script>

<style scoped>

</style>
