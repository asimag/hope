<template>
  <div class="mt-3 p-4">
    <div class="card">
      <div class="card-header">
        Contact Form
      </div>
      <div class="card-body" />
      <b-form v-if="show" class="p-4" @submit.prevent="onSubmit" @reset="onReset">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          />
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter name"
            required
          />
        </b-form-group>
        <b-button type="submit" variant="primary">
          Submit
        </b-button>
        <b-button type="reset" variant="danger">
          Reset
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
name: 'ContactForm',
  data () {
    return {
      form: {
        email: '',
        name: ''
      },
      show: true
    }
  },
  methods: {
    async onSubmit (event) {
      // alert(JSON.stringify(this.form))
       const response = (await this.$axios.post('contacts', this.form)).data
      console.log(response)
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
    }
  }
}
</script>

<style scoped>

</style>
