<template>
 <div>
    <h3>Notes for {{ username }}</h3>
    <add-note :username="username" :add-note="addNote"></add-note>
    <notes-list :notes="notes"></notes-list>
  </div> 
</template>

<script>
import NotesList from './NotesList'
import AddNote from './AddNote'

export default {
  components: {
    AddNote,
    NotesList
  },
  props: {
    username: {
      type: String, 
      required: true
    },
    notes: {
      type: Array, 
      required: true
    },
    addNote: {
      type: Function, 
      required: true
    }
  }
}
</script>
