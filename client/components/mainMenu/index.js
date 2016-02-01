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
    goToCredits: function(){
      store.dispatch(navigateToPage('CREDITS'));
    },
    goToLogin: function(){
      store.dispatch(navigateToPage('LOGIN'));
    },
    goToSignup: function(){
      store.dispatch(navigateToPage('SIGNUP'));
    },
    goToForgot: function(){
      store.dispatch(navigateToPage('FORGOT'));
    },
    goToOptions: function(){
      store.dispatch(navigateToPage('GOPTIONS'));
    },
    goToLeaderBoard: function(){
      store.dispatch(navigateToPage('LEADER'));
    },
    render: function() {
        return (
        <div>
        <User login={this.goToLogin} signup={this.goToSignup} forgot={this.goToForgot}/>
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
            <h3>Tutorial</h3>
          </div>

          <div id="leader" className="clicky" onClick={this.goToLeaderBoard}>
            <h3>Leader Board</h3>
          </div>

          <div id="credits" className="clicky" onClick={this.goToCredits}>
            <h3>Credits</h3>
          </div>

        </div>
        </div>
        );
    }
});
module.exports = MainMenu;

// <div className="clicky" onClick={this.goToLogin}>Login</div>
// <div className="clicky" onClick={this.goToSignup}>Signup</div>