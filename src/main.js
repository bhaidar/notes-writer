import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { Server, Model } from 'miragejs'

/* eslint-disable no-new */
new Server({
  models: {
    note: Model
  },

  routes () {
    this.namespace = 'api'

    this.get('/notes', schema => {
      return schema.notes.all()
    })

    this.post('/notes', (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
      let newNote = schema.notes.create(attrs)
      return schema.notes.find(newNote.id)
    })

    this.patch('/notes/:id', (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody)
      let id = request.params.id
      let note = schema.notes.find(id)

      return note.update(newAttrs)
    })

    this.delete('/notes/:id', (schema, request) => {
      let id = request.params.id
      return schema.notes.find(id).destroy()
    })
  },

  seeds (server) {
    server.create('note', { body: '# An h1 header', title: '# An h1 header' })
    server.create('note', { body: '## An h2 header', title: '## An h2 header' })
    server.create('note', { body: '### An h3 header', title: '### An h3 header' })
    server.create('note', { body: '#### An h4 header', title: '#### An h4 header' })
    server.create('note', { body: '##### An h5 header', title: '##### An h5 header' })
    server.create('note', { body: '###### An h6 header', title: '###### An h6 header' })
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
