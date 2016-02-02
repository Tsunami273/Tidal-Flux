var User = React.createClass({
    getInitialState: function(){
      var user = store.getState().username
      return {
        user: user
      };
    },
    logout: function(){
      store.dispatch({type: 'LOG_OUT'});
      window.localStorage.removeItem('username');
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('offset');
      window.localStorage.removeItem('keybinds');
    },
    render: function() {
      var loggedIn = (<div> 
        Welcome, {this.state.user} 
        <span className="userbox-button" onClick={this.logout}> Log Out</span>
        </div>);
      var notLoggedIn = (<div>Not Logged In: 
        <span className="userbox-button" onClick={this.props.login}> Log In</span> or 
        <span className="userbox-button" onClick={this.props.signup}> Sign Up</span>
        </div>);
        return (<div className="userbox">
        {this.state.user ? loggedIn : notLoggedIn}
        </div>
        );
    }
});
module.exports = User;
