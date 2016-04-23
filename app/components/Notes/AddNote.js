import React from 'react'

class AddNote extends React.Component {
  setRef(ref) {
    this.note = ref
  } 
  // no commas, we are not in an object
  handleSubmit() {
    const newNote = this.note.value
    this.note.value = ''
    this.props.addNote(newNote)
  }

  render() {
    return (
      <div className="input-group">
        {/* notice use of arrow function due to `this` binding issues (we want `this` outside of function) */}
        <input type="text" className="form-control" placeholder="Add New Note" ref={(ref) => this.setRef(ref)} />
        <span className="input-group-btn">
          {/*<button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>*/}
          <button className="btn btn-default" type="button" onClick={() => this.handleSubmit()}>Submit</button>
        </span>
      </div>
    )
  }
}

AddNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
} 

export default AddNote
