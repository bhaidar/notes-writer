<template>
  <section>
    <div class="notes">
      <section class="create-note">
        <a
          href="#"
          @click.prevent="newNote"
        ><span>Create a new Note</span></a>
        <a
          href="#"
          @click.prevent="closeList"
        ><span class="cancel">Cancel</span></a>
      </section>
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
  </section>

</template>

<script>
import Note from './NoteItem'
import { mapMutations } from 'vuex'

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
    ...mapMutations(['toggleSidebar']),
    closeList () {
      this.toggleSidebar()
    },
    newNote () {
      this.$emit('set-note')
      this.closeList()
    },
    setNote (note) {
      this.$emit('set-note', { id: note.id })
      this.toggleSidebar()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/components/notes-list.scss";
</style>
