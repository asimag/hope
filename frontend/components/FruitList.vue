<template>
  <div class="container">
    <h3>Fruit List</h3>
    <nuxt-link class="btn btn-sm btn-secondary" :to="'/fruits/create'">Add Fruit</nuxt-link>
    <v-client-table :data="fruits" :columns="columns" :options="options" >
        <template v-slot:actions="props">
          <nuxt-link :to="'/fruits/' + props.row.id + '/edit'">
            <i class="fas fa-edit"></i>
          </nuxt-link>
          <b-link v-b-tooltip.hover title="Delete" @click.prevent="deleteItem(props.row.id)">
            <i class="fas fa-trash-alt text-danger"></i>
          </b-link>
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
   mounted () {
    this.getFruits();
  },
  methods: {
    edit(data) {
      return "/contact";
    },
    async getFruits() {
      this.fruits = (await this.$axios.get('fruits')).data
    },
    deleteItem(id) {
      this.$swal(
          {
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: "Yes, delete",
            cancelButtonText: "Cancel"
          }
      ).then((result) => {
        if (result.value) {
          this.$axios.delete(`/fruits/${id}`)
            .then((response) => {
              this.$toasted.success(`<i class="fas fa-check-circle"></i> ${response.data} successfully deleted`)
              this.getFruits();
          }).catch((error) => {
              this.$toasted.error(`<i class="fas fa-times-circle"></i> ${error}`)
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
