const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')

admin.initializeApp()

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: '',
    pass: ''
  }
})

exports.onNewNoteCreated =
  functions.firestore.document('notes/{notesId}').onCreate((snap, context) => {
    const { body } = snap.data()
    const { params: { notesId } } = context

    console.log(body)
    console.log(notesId)

    const mailOptions = {
      from: '',
      to: '',
      subject: 'A new note is created',
      html: `
        <h1>New Note</h1>
        <p>A new note is created with the following details:</p>
        <p>
          Note Id: <br />
          ${notesId}
        </p>
        <p>
          Note Body: <br />
          ${body}
        </p>`
    }

    return transporter.sendMail(mailOptions)
      .then(() => console.log('Email Sent!'))
      .catch(error => console.error(error))
  })
