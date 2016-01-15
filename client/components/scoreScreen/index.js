// import child components here.
var NavButton = require('../navButton.js');

ScoreScreen = React.createClass({
    play: function(event) {
      store.dispatch(navigateToPage('SELECT'));
    },
    render: function() {
        return (
        <div>
          <h1>Score Screen</h1>
          <br />
          <NavButton dest="Done" onClick={this.play} />
        </div>
        );
    }
});
module.exports = MainMenu;