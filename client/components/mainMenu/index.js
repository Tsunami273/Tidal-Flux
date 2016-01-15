// import child components here.
// var combos = require('./keybinds.js');
var NavButton = require('../navButton.js');

MainMenu = React.createClass({
    play: function(event) {
      store.dispatch(navigateToPage('SELECT'));
    },
    render: function() {
      // listener.register_many[{}]
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
