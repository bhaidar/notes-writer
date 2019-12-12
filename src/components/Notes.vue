<template>
  <div class="notes-container">
    <NotesList
      :notes="notesList"
      @set-note="setNote"
      class="notes-container__list"
    ></NotesList>
    <NotesCreate
      :note="note"
      @save-note="saveNote"
      @set-note="setNote"
      @delete-note="deleteNote"
      class="notes-container__create"
    ></NotesCreate>
  </div>
</template>

<script>
import NotesCreate from './NotesCreate'
import NotesList from './NotesList'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    NotesCreate,
    NotesList
  },
  computed: {
    ...mapState(['notesList', 'note'])
  },
  methods: {
    ...mapActions(['saveNote', 'setNote', 'deleteNote'])
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/components/notes.scss";
</style>
