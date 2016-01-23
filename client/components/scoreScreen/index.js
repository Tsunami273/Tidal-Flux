// import child components here.
var NavButton = require('../navButton.js');

ScoreScreen = React.createClass({
    play: function(event) {
      store.dispatch(navigateToPage('SELECT'));
    },
    render: function() {
      var score = store.getState().score;
      var judges = store.getState().judges;
      var health = judges.health;
      var message = '';
      if(health <= 0){
        message = <h2>Hey Festus, you lose!</h2>;
      }
      return (
        <div>
          <h1>Score Screen</h1>
          <div>{message}</div>
          <br />
          <div>{score}</div>
          <div>Perfect: {judges.Perfect}</div>
          <div>Good: {judges.Good} </div>
          <div>Decent: {judges.Decent}</div>
          <div>Miss: {judges.Miss}</div>
          <NavButton dest="Done" onClick={this.play} />
        </div>
        );
    }
});
module.exports = MainMenu;