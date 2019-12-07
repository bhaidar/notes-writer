<template>
  <div class="notes-container">
    <NotesList
      :notes="notes"
      @set-note="setNote"
      class="notes-container__list"
    ></NotesList>
    <NotesCreate
      :note="currentNote"
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
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    NotesCreate,
    NotesList
  },
  computed: {
    ...mapGetters(['notes', 'currentNote'])
  },
  mounted () {
    this.getNotesList()
  },
  methods: {
    ...mapActions(['getNotesList', 'saveNote', 'setNote', 'deleteNote'])
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/components/notes.scss";
</style>
