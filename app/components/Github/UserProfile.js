var React = require('react');

var UserProfile = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired,
  },
  render: function() {
    console.log('BIO', this.props.bio);
    return (
      <div>
        <p>User Profile</p>
        <p> Username: {this.props.username}</p>
      </div>
    )
  }
});

module.exports = UserProfile;
