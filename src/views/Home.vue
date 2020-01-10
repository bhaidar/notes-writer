<template>
  <div>
    <Navbar></Navbar>
    <main>
      <Notes></Notes>
    </main>
  </div>
</template>

<script>
import Notes from './../components/Notes.vue'
import Navbar from './../components/Navbar'

export default {
  components: {
    Notes,
    Navbar
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/components/home.scss";
</style>
