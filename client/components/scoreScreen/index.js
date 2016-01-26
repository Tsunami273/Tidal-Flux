// import child components here.
var NavButton = require('../navButton.js');

ScoreScreen = React.createClass({
    getInitialState: function(){
      var dog = store.getState();
      return {
        judges: dog.judges,
        username: dog.username, 
        score: dog.score,
        currSong: dog.selectedSong,
        currDiff: dog.selectedDiff,
        response: {message: ''}
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
          data: { username : this.state.username, songId : this.state.currSong.id, difficulty : this.state.currDiff, points : this.state.score },
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
      var message = '';
      if(this.state.judges.health <= 0){
        if (this.state.username) {
          message = <h2>Hey, {this.state.username} you lose! Score is {this.state.response.message}</h2>;
        } else {
          message = <h2>Hey, you lose!</h2>;
        }
      }
      if (this.state.judges.health > 0) {
        if (this.state.username) {
          message = <h2>Nice play, {this.state.username}! Score is {this.state.response.message}</h2>;
        } else {
          message = <h2>Nice Play!</h2>;
        }
      }

      return (
        <div>
          <h1>Score Screen</h1>
          <div>{message}</div>
          <br />
          <div>{this.state.currSong.title} - {this.state.currSong.artist}</div>
          <div>{this.state.currDiff}</div>
          <br />
          <div>{this.state.score}</div>
          <div>Perfect: {this.state.judges.Perfect}</div>
          <div>Good: {this.state.judges.Good} </div>
          <div>Decent: {this.state.judges.Decent}</div>
          <div>Miss: {this.state.judges.Miss}</div>
          <NavButton dest="Done" onClick={this.play} />
        </div>
        );
    }
});
module.exports = MainMenu;