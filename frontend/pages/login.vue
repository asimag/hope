<template>
  <div id="login">
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
            <form id="login-form" class="form" @submit.prevent="userLogin">
              <h3 class="text-center text-info">Login</h3>
              <div class="form-group">
                <label for="email" class="text-info">Username:</label><br>
                <input type="text" v-model="login.email" name="email" id="email" class="form-control">
              </div>
              <div class="form-group">
                <label for="password" class="text-info">Password:</label><br>
                <input type="password" v-model="login.password" name="password" id="password" class="form-control">
              </div>
              <div class="form-group">
                <label for="remember-me" class="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></span></label><br>
                <input type="submit" name="submit" class="btn btn-info btn-md" value="submit">
              </div>
              <div id="register-link" class="text-right">
                <a href="#" class="text-info">Register here</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  auth: 'guest',
  data() {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('laravelJWT', { data: this.login })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style >
body {
margin: 0;
padding: 0;
background-color: #17a2b8;
height: 100vh;
}
#login .container #login-row #login-column #login-box {
margin-top: 120px;
max-width: 600px;
height: 320px;
border: 1px solid #9C9C9C;
background-color: #EAEAEA;
}
#login .container #login-row #login-column #login-box #login-form {
padding: 20px;
}
#login .container #login-row #login-column #login-box #login-form #register-link {
margin-top: -85px;
}
</style>