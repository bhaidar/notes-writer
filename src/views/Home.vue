<template>
  <div :class="{ 'sidebar-open' :  showSidebar }">
    <Navbar></Navbar>
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
import Navbar from './../components/Navbar'
import NotesCreate from './../components/NotesCreate'
import NotesList from './../components/NotesList'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    Navbar,
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
@import "@/styles/components/home.scss";
</style>
