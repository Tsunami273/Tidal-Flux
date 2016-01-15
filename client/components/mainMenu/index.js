// import child components here.
// var combos = require('./keybinds.js');
var NavButton = require('../navButton.js');

MainMenu = React.createClass({
    play: function(event) {
      store.dispatch(navigateToPage('SELECT'));
    },
    goToLogin: function(event){
      store.dispatch(navigateToPage('LOGIN'));
    },
    goToSignup: function(event){
      store.dispatch(navigateToPage('SIGNUP'));
    },
    render: function() {
      // listener.register_many[{}]
        return (
        <div>
          <h1>Main Menu</h1>
          <br />
          <div className="clicky" onClick={this.play}>Play</div>
          <div className="clicky" onClick={this.goToLogin}>Login</div>
          <div className="clicky" onClick={this.goToSignup}>Signup</div>
        </div>
        );
    }
});
module.exports = MainMenu;
