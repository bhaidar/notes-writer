<template>
  <div
    class="notes-container"
    :class="{ 'sidebar-open' :  showSidebar }"
  >
    <NotesList
      :notes="notesList"
      @set-note="setNote"
      class="notes-list"
    ></NotesList>
    <NotesCreate
      :note="note"
      @save-note="saveNote"
      @set-note="setNote"
      @delete-note="deleteNote"
      class="notes-create"
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
    ...mapState(['notesList', 'note', 'sidebarOpen']),
    showSidebar () {
      return this.sidebarOpen
    }
  },
  methods: {
    ...mapActions(['saveNote', 'setNote', 'deleteNote'])
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/components/notes.scss";
</style>
