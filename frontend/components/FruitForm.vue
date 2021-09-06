<template>
  <div class="mt-3 p-4">
    <div class="card">
      <div class="card-header">
        Fruit
      </div>
      <div class="card-body" />
      <b-form
        v-if="show"
        class="p-4"
        @submit.prevent="onSubmit"
        @reset="onReset"
        @keydown="form.onKeydown($event)"
      >
        <AlertError :form="form" />
        <label for="name" class="mt-2 form-label">Name</label>
        <input id="name" v-model="form.name" type="text" name="name" class="form-control">
        <HasError :form="form" field="name" />

        <label for="price" class="form-label">Price</label>
        <input id="price" v-model="form.price" type="text" name="price" class="form-control">
        <HasError :form="form" field="price" />

        <label for="quantity" class="form-label">Quantity</label>
        <input id="quantity" v-model="form.quantity" type="text" name="quantity" class="form-control">
        <HasError :form="form" field="quantity" />



        <div class="mt-4">
          <Button :form="form" class="btn btn-primary">
            Save
          </Button>
          <b-button type="reset" variant="danger">
            Reset
          </b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import { Button, HasError, AlertError } from 'vform/src/components/bootstrap5'

export default {
name: 'ContactForm',
  components: {
    Button, HasError, AlertError
  },
  data () {
    return {
      form: new Form(
          {
            name: '',
            price: '',
            quantity: '',

          }
      ),
      show: true,
      options: []
    }
  },
  async mounted () {
    if (this.$route.params['id']) {
      this.form.fill( (await this.$axios.get('fruits/' + this.$route.params.id)).data);
    }
  },
  methods: {
    async onSubmit (event) {
      Form.axios = this.$axios
      try {
        const response = (this.$route.params['id']) ?
         await this.form.put('fruits/' + this.$route.params.id ) :
            await this.form.post('fruits');
        await this.$router.push('/fruits/');
        console.log(response)
      } catch {
        console.log('Something went wrong')
      }
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.price = ''
      this.form.quantity = ''
      this.form.name = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },

  }
}
</script>

<style scoped>

</style>
