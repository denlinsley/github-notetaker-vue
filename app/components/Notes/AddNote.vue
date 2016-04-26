<template>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Add New Note" v-model="newNote" />
    <span class="input-group-btn">
      <button class="btn btn-default" type="button" @click="handleSubmit">Submit</button>
    </span>
  </div>
</template>

<script>
 export default {
  props: {
    username: {
      type: String,
      required: true
    },
    addNote: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      newNote: ''
    }
  },
  methods: {
    handleSubmit() {
      this.addNote(this.newNote)
      this.newNote = ''
    }
  }
 } 
</script>
