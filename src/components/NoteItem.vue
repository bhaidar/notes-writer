<template>
  <div
    class="notes-item"
    @click.prevent="setNote"
  >
    <h4>{{ title }}</h4>
    <p>{{ body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    body: {
      type: String
    },
    id: {
      type: String
    }
  },
  methods: {
    setNote () {
      this.$emit('set-note', { id: this.id, body: this.body })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/components/note-item.scss";
</style>
