// import child components here.
var NavButton = require('../navButton.js');

MainMenu = React.createClass({
    play: function(event) {
      store.dispatch(navigateToPage('SELECT'));
    },
    render: function() {
        return (
        <div>
          <h1>Main Menu</h1>
          <br />
          <NavButton dest="Play" onClick={this.play} />
        </div>
        );
    }
});
module.exports = MainMenu;
