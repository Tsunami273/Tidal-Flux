// import child components here.
var NavButton = require('../navButton.js');
var navKeys = require('../navKeys.js');

ScoreScreen = React.createClass({
    getInitialState: function(){
      var dog = store.getState();
      var grade = dog.score > 700000 ? dog.score > 800000 ? dog.score > 900000 ? dog.score > 950000 ? dog.score > 990000 ?  dog.score === 1000000 ? 'SS' : 'S' :'A+' : 'A' : 'B' : 'C' : 'F';
      return {
        judges: dog.judges,
        username: dog.username, 
        score: dog.score,
        token: dog.token,
        hits: dog.hits,
        currSong: dog.selectedSong,
        currDiff: dog.selectedDiff,
        response: {message: ''},
        grade: grade
      };
    },

    play: function(event) {
      store.dispatch(navigateToPage('SELECT'));
    },

    componentDidMount: function(){
      var combos = [
      navKeys(this, 'enter', this.play),
      navKeys(this, 'escape', this.play),
      navKeys(this, 'backspace', this.play)];
      listener.register_many(combos);
      //Check first if user is logged in
      if (this.state.username) {
        $.ajax({
          url: '/api/player/score',
          dataType: 'json',
          type: 'POST',
          data: { 
            token : this.state.token, 
            songId : this.state.currSong.id,
            difficulty : this.state.currDiff, 
            points : this.state.score,
            hits: this.state.hits },
          success: function(data) {
            this.setState({response: data});
          }.bind(this), 
          error: function(xhr, status, err) {
            console.log('Error: ', err);
          }.bind(this)
        });
      }
    },
    componentWillUnmount: function(event){
      listener.reset();
    },
    render: function() {
      var message = '';
      // var score = <p>{this.state.response.message}</p>
      if(this.state.judges.health <= 0){
        if (this.state.username) {
          message = <p>Hey, {this.state.username} you lose!</p>;
        } else {
          message = <p>Hey, you lose!</p>;
        }
      }
      if (this.state.judges.health > 0) {
        if (this.state.username) {
          message = <p>Nice play, {this.state.username}!</p>;
        } else {
          message = <p>Nice Play!</p>;
        }
      }

      return (
        <div>
        <div className="score-screen-container">
          <div className="message-container">
            {message}    
          </div>
          <div className="song-info-container">
            <div className="ss-song-title">{this.state.currSong.title}</div>
            <div className="ss-song-artist">{this.state.currSong.artist}</div>
          </div>
          <div className="ss-song-diff">Difficulty: {this.state.currDiff}</div>
          <div id="scoreinner">
            <div className="grade-container">{this.state.grade}</div>
            <div className="score-container">Score: <span className="score-count">{this.state.score}</span></div>
            <div className="judge-container">
            <div>Perfect: <span className="judge-count">{this.state.judges.Perfect}</span></div>
            <div>Good: <span className="judge-count">{this.state.judges.Good}</span></div>
            <div>Decent: <span className="judge-count">{this.state.judges.Decent}</span></div>
            <div>Miss: <span className="judge-count">{this.state.judges.Miss}</span></div>
          </div>
          </div>
        </div>
          <div className="clicky" id="done" onClick={this.play}>
          <h3>Done</h3>
          </div>
        </div>
        );
    }
});
module.exports = ScoreScreen;
// <div className="highscore-container"><h2>Your current top score :{this.state.response.highscore}</h2></div>
