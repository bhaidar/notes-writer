<template>
  <div id="app">
    <Notes></Notes>
  </div>
</template>

<script>
import Notes from './components/Notes.vue'

export default {
  components: {
    Notes
  }
}
</script>

<style lang="scss">
@import "@/styles/global.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-default;
  margin: 0;
  padding: 0;
}
</style>
