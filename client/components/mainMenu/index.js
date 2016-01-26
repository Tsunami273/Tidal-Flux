// import child components here.
// var combos = require('./keybinds.js');
var NavButton = require('../navButton.js');
var User = require('./User.js');

MainMenu = React.createClass({
    getInitialState: function(){
      var user = store.getState().username; 
      return {user: user};
    },
    play: function(event) {
      store.dispatch(navigateToPage('SELECT'));
    },
    goToLogin: function(event){
      store.dispatch(navigateToPage('LOGIN'));
    },
    goToSignup: function(event){
      store.dispatch(navigateToPage('SIGNUP'));
    },
    goToOptions: function(event){
      store.dispatch(navigateToPage('GOPTIONS'))
    },
    render: function() {
        return (
        <div>
        <User className="userbox" login={this.goToLogin} signup={this.goToSignup} />
        <div id="menucontain">

          <div id="title">
            <img src="TidalFlux.svg" alt="Tidal Flux"></img>
          </div>
          <br />
          <div id="play" className="clicky" onClick={this.play}>
            <h3>Play</h3>
          </div>

          <div id="options" className="clicky" onClick={this.goToOptions}>
            <h3>Options</h3>
          </div>

          <div id="login" className="clicky" onClick={this.goToLogin}>
            <h3>Login</h3>
          </div>

          <div id="signup" className="clicky" onClick={this.goToSignup}>
            <h3>Signup</h3>
          </div>

        </div>
        </div>
        );
    }
});
module.exports = MainMenu;

// <div className="clicky" onClick={this.goToLogin}>Login</div>
// <div className="clicky" onClick={this.goToSignup}>Signup</div>