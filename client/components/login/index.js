// import child components here.
Login = React.createClass({
    getInitialState: function() {
      return {
      username: '', 
      password: '', 
      usernameError: '',
      signInError: '',
      };
    },
    goToSignup: function(event){
      store.dispatch(navigateToPage('SIGNUP'));
    },
    goToMainMenu: function(event) {
    store.dispatch(navigateToPage('MAIN'));
    },
    goToForgot: function(){
      store.dispatch(navigateToPage('FORGOT'));
    },
    validateUsername: function(event){
      if(event.target.value.length < 4){
        this.setState({username: event.target.value, usernameError:'Username must be at least 4 characters'});
      }
      else if(event.target.value.length > 16){
        this.setState({username: event.target.value, usernameError:'Username must be less than 16 characters'});
      }
      else {
        this.setState({username: event.target.value, usernameError: ''});
      }
    },
    setPassword: function(event){
      this.setState({password: event.target.value});
    },
    sendCredentialsToServer: function(event){
      event.preventDefault();
      $.ajax({
        url: '/api/player/signin',
        dataType: 'json',
        type: 'POST',
        data: { username : this.state.username, password : this.state.password },
        success: function(data) {
          var keybinds = JSON.stringify(data.keybinds);
          window.localStorage.setItem('username', data.username); 
          window.localStorage.setItem('token', data.token); 
          window.localStorage.setItem('offset', data.offset); 
          window.localStorage.setItem('keybinds', keybinds); 
          store.dispatch( signIn(data.username, data.token, data.offset, data.keybinds) );
        }.bind(this),
        error: function(xhr, status, err) {
          this.setState({signInError: 'Invalid Username / Password'});
        }.bind(this)
      });
    },
    render: function() {
      var usernameError = this.state.usernameError ? 'Error, ' + this.state.usernameError : '';
      var hide = this.state.username === '' || this.state.password === '' || this.state.usernameError  ? 'disabled' : false
        return (
        <div id="loginA">
          <img src="TidalFlux.svg" alt="Tidal Flux" className="logo" onClick={this.goToMainMenu}></img>
          <div id="loginContain">
            <div id="loginTitle">Login</div>
            <form onSubmit={this.sendCredentialsToServer}>
              <br />
              <div className="loginfield">Username</div><input type="text" value={this.state.username} onChange={this.validateUsername}/>
              <br />
              <br />
              <div className="loginfield">Password</div> <input type="password" value={this.state.password} onChange={this.setPassword}/>
              <br />
              <br />
              <input type="submit" id="subButton" disabled={hide}/>
            </form>
              <div id="uError">{usernameError}</div>
              <div className='signInError'>{this.state.signInError}</div>
              <br />
              <div id="notUser" onClick={this.goToSignup}>Not yet a user? Click here.</div>
              <span className="userbox-button" onClick={this.goToForgot}>Forgot Password</span>
              <div id="notUser" onClick={this.goToMainMenu}>Back</div>
          </div>

        </div>
        );
    }
});
module.exports = Login;