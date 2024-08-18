// import child components here.
var NavButton = require('../navButton.js');
var User = require('./User.js');
var Volume = require('../volume.js');

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
    goToOptions: function(){
      store.dispatch(navigateToPage('GOPTIONS'));
    },
    goToLeaderBoard: function(){
      store.dispatch(navigateToPage('LEADER'));
    },
    goToTutorial: function(){
      store.dispatch( navigateFromSelect('TUTORIAL', songList[3], 1, 'Easy' ) );
    },
    render: function() {
        return (
        <div>
        <User login={this.goToLogin} signup={this.goToSignup}/>
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

          <div id="tutorial" className="clicky" onClick={this.goToTutorial}>
            <h3>Tutorial</h3>
          </div>

          <div id="leader" className="clicky" onClick={this.goToLeaderBoard}>
            <h3>Leaderboard</h3>
          </div>

          <div id="credits" className="clicky" onClick={this.goToCredits}>
            <h3>Credits</h3>
          </div>

        </div>
        <Volume />
        </div>
        );
    }
});
module.exports = MainMenu;
