// import child components here.
var NavButton = require('../navButton.js');

Profile = React.createClass({
    getInitialState: function(){
      var player = store.getState();
      return {
        judges: player.judges,
        username: player.username, 
        score: player.score,
        token: player.token,
        currSong: player.selectedSong,
        currDiff: player.selectedDiff,
        response: {message: ''},
      };
    },

    play: function(event) {
      store.dispatch(navigateToPage('SELECT'));
    },

    componentDidMount: function(){
      //Check first if user is logged in
      if (this.state.username) {
        $.ajax({
          url: '/api/player/score',
          dataType: 'json',
          type: 'POST',
          data: { token : this.state.token, songId : this.state.currSong.id, difficulty : this.state.currDiff, points : this.state.score },
          success: function(data) {
            this.setState({response: data});
          }.bind(this), 
          error: function(xhr, status, err) {
            console.log('Error: ', err);
          }.bind(this)
        });
      }
    },

    render: function() {
      return (
        <div className="profile-screen-container">
          <h1>My Profile</h1>
          <div className="username-container">
            <span className="username">Hi, {this.state.username}</span>
          </div>
          <div className="songs-scores-container">
            <h3>My Scores</h3>
          </div>

          <NavButton dest="Main Menu" onClick={this.play} />
        </div>
        );
    }
});
module.exports = Profile;