<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {}
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
