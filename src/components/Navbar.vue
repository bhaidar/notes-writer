<template>
  <header class="navbar">
    <div
      class="sidebar-button"
      @click.prevent="toggleList"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        viewBox="0 0 448 512"
        class="burger"
      >
        <path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path>
      </svg>
    </div>
    <router-link :to="{ name: 'home' }"><span class="site-name">Notes Writer App</span></router-link>
    <div class="links">
      <a
        href="#"
        title="Logout"
        v-if="showLogout"
        @click="logout"
      ><span class="logout">Logout</span></a>
    </div>
  </header>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
const fb = require('./../../firebaseConfig.js')

export default {
  computed: {
    ...mapState(['currentUser']),
    showLogout () {
      return this.currentUser
    }
  },
  methods: {
    ...mapMutations(['toggleSidebar']),
    ...mapActions(['clearData']),
    async logout () {
      await fb.auth.signOut()
      this.clearData()
      this.$router.push('/login')
    },
    toggleList: function () {
      this.toggleSidebar()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/components/navbar.scss";
</style>
