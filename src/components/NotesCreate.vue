<template>
  <div class="editor">
    <div class="editor__md">
      <div
        v-if="showControls"
        class="editor__controls"
      >
        <button
          class="btn btn--new-note"
          @click="saveNewNote"
        >Save</button>
        <button
          class="btn btn--delete-note"
          v-if="showDeleteBtn"
          @click="deleteNote"
        >Delete</button>
        <button
          class="btn btn--clear-note"
          @click="resetNote"
        >New</button>
      </div>
      <textarea
        name="markdown"
        :value="currentNote"
        @input="onNoteChanged"
        placeholder="Type your note here ..."
      ></textarea>
    </div>
    <div class="editor__compiled-md">
      <div v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import _ from 'lodash'

export default {
  props: {
    note: {
      type: Object
    }
  },
  computed: {
    compiledMarkdown () {
      return this.currentNote ? marked(this.currentNote) : ''
    },
    currentNote () {
      return this.note && this.note.body
    },
    showControls () {
      return !!this.currentNote
    },
    showDeleteBtn () {
      return !!(this.note && this.note.id)
    }
  },
  methods: {
    deleteNote: function () {
      if (window.confirm('Are you sure you want to delete this note?')) {
        this.$emit('delete-note')
      }
    },
    saveNewNote: function () {
      this.$emit('save-note')
    },
    resetNote: function () {
      this.$emit('set-note')
    },
    onNoteChanged: _.debounce(function (e) {
      const { id } = this.note
      const body = e.target.value

      this.$emit('set-note', { id, body })
    }, 300)
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/components/notes-create.scss";
</style>
