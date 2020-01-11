import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('./../../firebaseConfig.js')

Vue.use(Vuex)

fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('setCurrentUser', user)

    // realtime updates from our notes collection
    fb.notesCollection.orderBy('createdOn', 'desc').onSnapshot(querySnapshot => {
      let notesArray = []

      querySnapshot.forEach(doc => {
        let note = doc.data()
        note.id = doc.id
        notesArray.push(note)
      })

      store.commit('loadNotes', notesArray)
    })
  }
})

export const store = new Vuex.Store({
  state: {
    notesList: [],
    note: {},
    performingDelete: false,
    performingAdd: false,
    performingUpdate: false,
    currentUser: {},
    sidebarOpen: false
  },
  actions: {
    clearData ({ commit }) {
      commit('setCurrentUser', {})
      commit('loadNotes', [])
      commit('setNote', {})
    },
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

      commit('setNote', {})
    },
    setNote ({ commit }, { id = '', body = '' } = {}) {
      commit('setNote', { id, body })
    },
    async saveNote ({ commit, state }) {
      const { id, body, title } = state.note

      if (id) { // update
        commit('setPerformingUpdate', true)
        await fb.notesCollection.doc(id).update({
          body,
          title,
          updatedOn: fb.firebase.firestore.Timestamp.now()
        })
        commit('setPerformingUpdate', !state.performingUpdate)
      } else { // add
        commit('setPerformingAdd', true)
        await fb.notesCollection.add({
          body,
          title,
          createdOn: fb.firebase.firestore.Timestamp.now(),
          updatedOn: fb.firebase.firestore.Timestamp.now()
        })
        commit('setPerformingAdd', !state.performingAdd)
      }

      commit('setNote', {})
    }
  },
  mutations: {
    loadNotes (state, notes) {
      state.notesList = notes
    },
    setNote (state, note) {
      let localNote = {}

      const { id, body } = note

      if (id) {
        localNote = state.notesList.find(n => n.id === id)
        const newNoteBody = body || localNote.body

        localNote = { ...note, body: newNoteBody, title: newNoteBody.substring(0, 20) }
      } else if (body) {
        localNote = { body, title: body.substring(0, 20) }
      }

      state.note = localNote
    },
    setPerformingDelete (state, flag) {
      state.performingDelete = flag
    },
    setPerformingAdd (state, flag) {
      state.performingAdd = flag
    },
    setPerformingUpdate (state, flag) {
      state.performingUpdate = flag
    },
    setCurrentUser (state, user) {
      state.currentUser = user
    },
    toggleSidebar (state) {
      state.sidebarOpen = !state.sidebarOpen
    }
  }
})
