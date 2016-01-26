// import child components here.
var NavButton = require('../navButton.js');

ScoreScreen = React.createClass({
    getInitialState: function(){
      var dog = store.getState();
      return {
        judges: dog.judges,
        score: dog.score,
        currSong: dog.selectedSong,
        currDiff: dog.selectedDiff,
      };
    },
    play: function(event) {
      store.dispatch(navigateToPage('SELECT'));
    },
    render: function() {
      var message = ''
      if(this.state.judges.health <= 0){
        message = <h2>Hey Festus, you lose!</h2>;
      }
      return (
        <div>
          <h1>Score Screen</h1>
          <div>{this.state.message}</div>
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