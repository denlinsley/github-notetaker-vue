<template>
  <div class="row">
    <div class="col-md-4">
      <user-profile :username="username" :bio="bio"></user-profile>
    </div>
    <div class="col-md-4">
      <repos :username="username" :repos="repos"></repos>
    </div>
    <div class="col-md-4">
      <notes 
        :username="username" 
        :notes="notes"
        :add-note="handleAddNote">
      </notes>
    </div>
  </div>
</template>

<script>
import UserProfile from './Github/UserProfile'
import Repos from './Github/Repos'
import Notes from './Notes/Notes'
import Firebase from 'firebase'
import getGithubInfo from '../utils/helpers'

export default {
  name: 'Profile',
  components: {
    UserProfile,
    Repos,
    Notes
  },

  data() {
    return {
      notes: [],
      bio: {},
      repos: [],
      ref: null,
      childRef: null,
      username: ''
    }
  },

  route: {
    data({ to }) {
      this.username = to.params.username
      this.init(this.username)
      // TODO: it's more idiomatic in vue to set component data here
      // this.init(this.username).then((data) => {
      //   this.bio = data.bio,
      //   this.repos = data.repos
      // })
    }
  },

  created() {
    this.ref = new Firebase('https://gh-note-taker-eh.firebaseio.com/')
    this.init(this.username)
  },

  destroyed() {
    this.childRef.off('value')
  }, 

  methods: {
    init(username) {
      this.childRef = this.ref.child(username)
      this.childRef.on('value', (snapshot) => { 
        this.notes = snapshot.val() || [] // TODO: default value not needed in react (ReactFire handles?)
      })

      // added `return` for resolving route data hook
      // but data should be assigned there?
      return getGithubInfo(username)
        .then((data) => {
          this.bio = data.bio,
          this.repos = data.repos
        })
    },
    handleAddNote(newNote) {
    // append a new note, key is array index (cf. push)
    this.ref.child(this.username)
      .child(this.notes.length)
      .set(newNote)
    },
  }
}
</script>
