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
        <div className="score-screen-container">
          <h1>My Profile</h1>
          <h3>{this.state.username}</h3>
          <div className="highscore-container"><h2>Your current top score :{this.state.response.highscore}</h2></div>
          <div className="song-info-container">
            <div className="ss-song-title">{this.state.currSong.title}</div>
            <div className="ss-song-artist">{this.state.currSong.artist}</div>
          </div>
          <div className="ss-song-diff">{this.state.currDiff}</div>
          <div className="score-container">Score: <span className="score-count">{this.state.score}</span></div>
          <div className="judge-container">
            <div>Perfect: <span className="judge-count">{this.state.judges.Perfect}</span></div>
            <div>Good: <span className="judge-count">{this.state.judges.Good}</span></div>
            <div>Decent: <span className="judge-count">{this.state.judges.Decent}</span></div>
            <div>Miss: <span className="judge-count">{this.state.judges.Miss}</span></div>
          </div>
          <NavButton dest="Done" onClick={this.play} />
        </div>
        );
    }
});
module.exports = Profile;