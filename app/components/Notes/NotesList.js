import React from 'react'

class NotesList extends React.Component {
  render() {
    const { notes } = this.props;
    return (
      <ul className="list-group">
        {notes.map(note => ( // parens allow implicit return not on same line
          <li key={note['.key']} className="list-group-item">{note['.value']}</li>
        ))}
      </ul>
    )
  }
}

// have to add propTypes as a property of the class after-the-fact
NotesList.propTypes = {
  notes: React.PropTypes.array.isRequired,
}

export default NotesList
