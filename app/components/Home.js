var React = require('react');

var Home = React.createClass({
  getInitialState: function() {
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  render: function() {
    return (
      <h2 className='text-center'>
        Search by Github Username Above
      </h2>
    )
  }
});

module.exports = Home;
