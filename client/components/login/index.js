// import child components here.

Login = React.createClass({
    getInitialState: function() {
      return {
      username: '', 
      password: '', 
      usernameError: '',
      signInError: '',
      hide:'hidden'
      };
    },
    goToSignup: function(event){
      store.dispatch(navigateToPage('SIGNUP'));
    },
    goToMainMenu: function(event) {
    store.dispatch(navigateToPage('MAIN'));
    },
    validateUsername: function(event){
      var username = event.target.value;
      var usernameError = '';
      if(username.length < 4){
        this.setState({usernameError: 'Username must be at least 4 characters'});
        this.setState({hide:'hidden'});
      }
      else if(username.length > 16){
        this.setState({usernameError: 'Username must be less than 16 characters'});
        this.setState({hide:'hidden'});
      }
      else{
        this.setState({usernameError: ''});
        this.setState({hide: ''});
      }
      this.setState({username: event.target.value});
    },
    setPassword: function(event){
      this.setState({password: event.target.value});
      if(this.state.usernameError === ''){
        this.setState({hide: ''});
      };
    },
    sendCredentialsToServer: function(event){
      event.preventDefault();
      $.ajax({
        url: '/api/player/signin',
        dataType: 'json',
        type: 'POST',
        data: { username : this.state.username, password : this.state.password },
        success: function(data) {
          store.dispatch( { type:'SIGN_IN', username : data.username} );
          store.dispatch( navigateToPage('MAIN') );
        }.bind(this),
        error: function(xhr, status, err) {
          this.setState({signInError: 'Invalid Username / Password'});
        }.bind(this)
      });
    },
    render: function() {
      var usernameError = this.state.usernameError ? 'Error, ' + this.state.usernameError : '';
      var hide = this.state.hide;
        return (
        <div id="loginA">
          <img src="TidalFlux.svg" alt="Tidal Flux" className="logo" onClick={this.goToMainMenu}></img>
          <div id="loginContain">
            <h1>Login</h1>
            <form onSubmit={this.sendCredentialsToServer}>
              <br />
              <div className="loginfield">Username</div><input type="text" value={this.state.username} onChange={this.validateUsername}/>
              <br />
              <br />
              <div className="loginfield">Password</div> <input type="password" value={this.state.password} onChange={this.setPassword}/>
              <br />
              <br />
              <input type="submit" id="subButton" className={hide}/>
            </form>
              <div>{usernameError}</div>
              <div className='signInError'>{this.state.signInError}</div>
              <br />
              <br />
              <div id="notUser" onClick={this.goToSignup}>Not yet a user? Click here.</div>
          </div>
        </div>
        );
    }
});
module.exports = Login;