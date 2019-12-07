<template>
  <div
    class="notes__item"
    @click.prevent="setNote"
  >
    <h4>{{ title }}</h4>
    <p class="notes__item__body">{{ body }}</p>
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
