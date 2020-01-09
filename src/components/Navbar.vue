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
    <router-link :to="{ name: 'home' }"><span class="site-name">Notes App Writer</span></router-link>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['toggleSidebar']),
    toggleList: function () {
      this.toggleSidebar()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/components/navbar.scss";
</style>
