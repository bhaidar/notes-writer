import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const fb = require('./../firebaseConfig.js')

Vue.use(Vuex)

// realtime updates from our notes collection
fb.notesCollection.orderBy('createdOn', 'desc').onSnapshot(querySnapshot => {
  let notesArray = []

  querySnapshot.forEach(doc => {
    let note = doc.data()
    note.id = doc.id
    notesArray.push(note)
  })

  store.commit('setNotes', notesArray)
})

export const store = new Vuex.Store({
  state: {
    notesList: [],
    note: {},
    performingDelete: false
  },
  actions: {
    async deleteNote ({ commit, state }) {
      let id = (state.note && state.note.id)

      if (id) {
        try {
          commit('setPerformingDelete', true)
          await fb.notesCollection.doc(id).delete()
          commit('setPerformingDelete', !state.performingDelete)
        } catch (error) {
          console.error(error)
        }
      }
    },
    setNote ({ commit }, { id = '', body = '' } = {}) {
      commit('setNote', { id, body })
    },
    async saveNote ({ commit, state }) {
      let note = {}

      let url = state.note.id ? `/api/notes/${state.note.id}` : '/api/notes'
      let method = state.note.id ? 'patch' : 'post'

      await axios({
        method,
        url,
        data: state.note
      }).then(response => {
        note = response.data.note
      })

      commit('saveNote', note)
    }
  },
  mutations: {
    setNotes (state, notes) {
      state.notesList = notes
    },
    setNote (state, { id, body }) {
      let note = {}

      if (id) {
        note = state.notesList.find(note => note.id === id)
        const newNoteBody = body || note.body

        note = { ...note, body: newNoteBody, title: newNoteBody.substring(0, 20) }
      } else if (body) {
        note = { body, title: body.substring(0, 20) }
      }

      state.note = note
    },
    saveNote (state, note) {
      const notePosition = state.notesList.findIndex(n => n.id === note.id)
      if (notePosition < 0) {
        state.notesList.push(note)
      } else {
        state.notesList.splice(notePosition, 1, note)
      }

      state.note = null
    },
    setPerformingDelete (state, flag) {
      state.performingDelete = flag
    }
  }
})
