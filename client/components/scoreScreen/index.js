// import child components here.
var NavButton = require('../navButton.js');

ScoreScreen = React.createClass({
    getInitialState: function() {
      var globalState = store.getState();

      var username = globalState.username;
      var score = globalState.score;
      var judges = globalState.judges;
      var songId = globalState.selectedSong.id;
      var difficulty = globalState.selectedDiff;
      var response = globalState.response;
      return {
        username: username,
        score: score,
        judges: judges,
        songId: songId,
        difficulty: difficulty,
        response: ''
      }
    },

    componentWillMount: function(){
      $.ajax({
        url: '/api/player/score',
        dataType: 'json',
        type: 'POST',
        data: { username : this.state.username, songId : this.state.songId, difficulty : this.state.difficulty, points : this.state.score },
        success: function(data) {
          console.log('Ajax response: ', data);
          this.setState({response: data});
        
        }.bind(this), 
        error: function(xhr, status, err) {
          console.log('Error: ', err);
        }.bind(this)
      });
    },

    render: function() {
      var username = this.state.username;
      var score = this.state.score;
      var judges = this.state.judges;
      var response = this.state.response.message;
      console.log('Server response to render: ', response);
      var health = judges.health;
      var message = '';
      if(health <= 0){
        if (username) {
          message = <h2>Hey, {username} you lose!</h2>;
        } else {
          message = <h2>Hey, you lose!</h2>;
        }
      }
      if (health > 0) {
        if (username) {
          message = <h2>Nice play, {username}!</h2>;
        } else {
          message = <h2>Nice Play!</h2>;
        }
      }

      return (
        <div>
          <h1>Score Screen</h1>
          <div>{message}</div>
          <br />
          <div>{score}</div>
          <h4>CommentList: {response} </h4>
          <div>{username}</div>
          <div>Perfect: {judges.Perfect}</div>
          <div>Good: {judges.Good} </div>
          <div>Decent: {judges.Decent}</div>
          <div>Miss: {judges.Miss}</div>
          <NavButton dest="Done" onClick={this.play} />
        </div>
        );
    },

    play: function(event) {
      store.dispatch(navigateToPage('SELECT'));
    }

});
module.exports = MainMenu;