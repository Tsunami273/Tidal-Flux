// import child components here.
var NavButton = require('../navButton.js');

ScoreScreen = React.createClass({
    play: function(event) {
      store.dispatch(navigateToPage('SELECT'));
    },
    render: function() {
      var score = store.getState().score;
      var judges = store.getState().judges;
        return (
        <div>
          <h1>Score Screen</h1>
          <br />
          <div>{score}</div>
          <div>Perfects: {judges.Perfect}</div>
          <div>Goods: {judges.Good} </div>
          <div>Decent: {judges.Decent}</div>
          <div>Miss: {judges.Miss}</div>
          <NavButton dest="Done" onClick={this.play} />
        </div>
        );
    }
});
module.exports = MainMenu;