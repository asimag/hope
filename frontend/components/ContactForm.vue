<template>
  <div class="mt-3 p-4">
    <div class="card">
      <div class="card-header">
        Contact Form
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

        <label for="email" class="form-label">Email</label>
        <input id="email" v-model="form.email" type="text" name="email" class="form-control">
        <HasError :form="form" field="email" />
        <label for="name" class="mt-2 form-label">Name</label>
        <input id="name" v-model="form.name" type="text" name="name" class="form-control">
        <HasError :form="form" field="name" />

        <label for="country" class="mt-2 form-label">Country</label>
        <v-select
          v-model="form.country_id"
          :options="options"
          label="nicename"
          :reduce="(op) => op.id"
        />

        <label for="file" class="mt-2 form-label">Your Photo</label>
        <input id="file" type="file" class="mt-2" name="file" @change="handleFile">
        <HasError :form="form" field="file" />

        <div v-if="form.progress">
          Progress: {{ form.progress.percentage }}%
        </div>

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
            email: '',
            name: '',
            country_id: '',
            file_name: null
          }
      ),
      show: true,
      options: []
    }
  },
  async mounted () {
    this.options = (await this.$axios.get('countries')).data
  },
  methods: {
    async onSubmit (event) {
      Form.axios = this.$axios
      try {
        const response = await this.form.post('contacts')
        console.log(response)
      } catch {
        console.log('Something went wrong')
      }
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    handleFile (event) {
      // We'll grab just the first file...
      // You can also do some client side validation here.
      const file = event.target.files[0]

      // Set the file object onto the form...
      this.form.file_name = file
    }

  }
}
</script>

<style scoped>

</style>
