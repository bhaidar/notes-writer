<template>
  <div class="sidebar-open">
    <Navbar></Navbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import "@/styles/components/app.scss";
</style>
