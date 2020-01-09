<template>
  <div class="notes">
    <div class="notes__items">
      <Note
        v-for="(note, index) in notes"
        :key="index"
        v-bind="note"
        class="notes__item"
        @set-note="setNote(note)"
      ></Note>
    </div>
  </div>
</template>

<script>
import Note from './NoteItem'
export default {
  props: {
    notes: {
      type: Array,
      required: false
    }
  },
  components: {
    Note
  },
  methods: {
    setNote (note) {
      this.$emit('set-note', { id: note.id })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/components/notes-list.scss";
</style>
