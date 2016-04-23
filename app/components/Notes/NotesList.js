var React = require('react');

var NotesList = React.createClass({
  propTypes: {
    notes: React.PropTypes.array.isRequired
  },
  render: function() {
    // var notes = this.props.notes.map(function(item, index) {
    //   return <li key={index} className="list-group-item">{item['.value']}</li>
    // });
    return (
      <ul className="list-group">
        {this.props.notes.map(function(note) {
          return <li key={note['.key']} className="list-group-item">{note['.value']}</li>
        })}
      </ul>
    )
  }
});

module.exports = NotesList;
