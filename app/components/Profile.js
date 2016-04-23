import React from 'react'
import Router from 'react-router'
import UserProfile from './Github/UserProfile'
import Repos from './Github/Repos'
import Notes from './Notes/Notes'
import ReactFireMixin from 'reactfire'
import Firebase from 'firebase'
import getGithubInfo from '../utils/helpers'

// cannot not use ES6 class syntax with mixins
// see https://github.com/tylermcginnis/re-base for an alternative
const Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState() {
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  componentDidMount() {
    this.ref = new Firebase('https://gh-note-taker-eh.firebaseio.com/')
    this.init(this.props.params.username)
  },
  componentWillReceiveProps(nextProps) {
    this.unbind('notes')
    this.init(nextProps.params.username)
  },
  componentWillUnmount() {
    this.unbind('notes')
  },
  init(username) {
    const childRef = this.ref.child(username)
    this.bindAsArray(childRef, 'notes') // property on state to bind to

    getGithubInfo(username)
      .then((data) => {
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      })
  },
  handleAddNote(newNote) {
    // append a new note, key is array index (cf. push)
    this.ref.child(this.props.params.username)
      .child(this.state.notes.length)
      .set(newNote)
  },
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes 
            username={this.props.params.username} 
            notes={this.state.notes} 
            addNote={this.handleAddNote} />
        </div>
      </div>
    )
  }
})

export default Profile
