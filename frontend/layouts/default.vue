<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/">
          CutScript
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav v-if="$auth.loggedIn">
            <b-nav-item href="/fruits">
              Fruits
            </b-nav-item>
            <b-nav-item href="/contact">
              Contact Us
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav v-else>
            <b-nav-item href="/login">
              Login
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search" />
              <b-button size="sm" class="my-2 my-sm-0" type="submit">
                Search
              </b-button>
            </b-nav-form>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">
                Profile
              </b-dropdown-item>
              <b-dropdown-item @click.prevent="logout">
                Logout
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
}
</script>

<style scoped>

</style>
