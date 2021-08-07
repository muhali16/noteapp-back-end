const { addNoteHandler, getAllNotes, getNotesByID, editNoteByID, deleteNoteByID } = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler
  }, {
    method: 'GET',
    path: '/notes',
    handler: getAllNotes
  }, {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNotesByID
  }, {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByID
  }, {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByID
  }
]

module.exports = routes
