<template>
  <div class="login">
    <section class="session">
      <div class="left"></div>
      <section>
        <header>
          <h1>Notes Writer</h1>
          <p>Welcome to Notes Writer App! Login to your account to manage your notes:</p>
        </header>
        <form
          class="form"
          @submit.prevent
        >
          <div class="form__field">
            <input
              id="email"
              type="text"
              placeholder="Email"
              autocomplete="off"
              v-model.trim="loginForm.email"
            >
            <label for="email">Email:</label>
          </div>
          <div class="form__field">
            <input
              id="password"
              type="password"
              placeholder="Password"
              autocomplete="off"
              v-model.trim="loginForm.password"
            >
            <label for="password">Password:</label>
          </div>
          <button
            @click="login"
            class="btn form__btn--submit"
          >Log In</button>
        </form>
      </section>
    </section>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
const fb = require('./../../firebaseConfig.js')

export default {
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapMutations(['setCurrentUser']),
    login: async function () {
      try {
        const user = await fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password)
        this.setCurrentUser(user.user)
        this.$router.push('/home')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/components/login.scss";
</style>
