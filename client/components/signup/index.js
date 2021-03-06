// import child components here.

Signup = React.createClass({
    getInitialState: function() {
      return {
      email: '', 
      username: '', 
      password: '', 
      confirmPassword: '',
      emailError: '',
      usernameError: '',
      passwordError: '',
      signUpError: '',
      };
    },
    goToLogin: function(event){
      store.dispatch(navigateToPage('LOGIN'));
    },
    goToMainMenu: function(event) {
    store.dispatch(navigateToPage('MAIN'));
    },
    validateEmail: function(event) {
      var email = event.target.value;
      if(!email.includes('@')){
        this.setState({
          emailError: 'not a valid email',
          email: event.target.value
        });
      }
      else{
        this.setState({
          emailError: '', 
          email: event.target.value
        });
      }
    },
    validateUsername: function(event){
      if(event.target.value.length < 4){
        this.setState({username: event.target.value, usernameError:'Username must be at least 4 characters'});
      }
      else if(event.target.value.length > 16){
        this.setState({username: event.target.value, usernameError:'Username must be less than 16 characters'})
      }
      else {
        this.setState({username: event.target.value, usernameError: ''});
      }
    },
    setPassword: function(event){
      if(this.state.confirmPassword !== '' && this.state.confirmPassword !== event.target.value){
        this.setState({password: event.target.value, passwordError: 'passwords do not match'});
      }
      else{
        this.setState({password: event.target.value, passwordError: ''});
      }
    },
    validatePassword: function(event){
      if(this.state.password !== event.target.value){
        this.setState({confirmPassword: event.target.value, passwordError: 'passwords do not match'});
      }
      else{
        this.setState({confirmPassword: event.target.value, passwordError: ''});
      }
    },
    sendCredentialsToServer: function(event){
      event.preventDefault();
      var dog = store.getState();
      $.ajax({
        url: '/api/player/signup',
        dataType: 'json',
        type: 'POST',
        data: { 
          email: this.state.email,
          username : this.state.username, 
          password : this.state.password,
          keybinds : dog.keyBinds,
          offset: dog.globalOffset
          },
        success: function(data) {
          var keybinds = JSON.stringify(this.keyBinds);
          window.localStorage.setItem('username', data.username); 
          window.localStorage.setItem('token', data.token); 
          window.localStorage.setItem('offset', this.globalOffset); 
          window.localStorage.setItem('keybinds', keybinds); 
          store.dispatch( signIn(data.username, data.token, this.globalOffset, this.keyBinds) );
        }.bind(dog),
        error: function(xhr, status, err) {
          this.setState({signUpError: 'This username/email already exists'});
        }.bind(this)
      });
    },
    render: function() {
      var emailError = this.state.emailError ? 'Error, ' + this.state.emailError : '';
      var usernameError = this.state.usernameError ? 'Error, ' + this.state.usernameError : '';
      var passwordError = this.state.passwordError ? 'Error, ' + this.state.passwordError : '';
      var hide = this.state.username === '' || this.state.password === '' || this.state.confirmPassword === '' || this.state.email === '' || 
      this.state.passwordError || this.state.usernameError || this.state.emailError ? 'disabled' : false;
        return (
        <div>
          <div id="signUpA">
            <img src="TidalFlux.svg" alt="Tidal Flux" className="logo" onClick={this.goToMainMenu}></img>
            <div id="signUpContain">
              <div id="signUpTitle">Sign Up</div>
              <form onSubmit={this.sendCredentialsToServer}>
                <div className="signUpField">Email</div> 
                <input type="input" value={this.state.email} onChange={this.validateEmail}/>
                <br />
                <br />
                <div className="signUpField">Username</div> 
                <input type="text" value={this.state.username} onChange={this.validateUsername}/>
                <br />
                <br />
                <div className="signUpField">Password</div> 
                <input type="password" value={this.state.password} onChange={this.setPassword}/>
                <br />
                <br />
                <div className="signUpField">Confirm Password</div> 
                <input type="password" value={this.state.confirmPassword} onChange={this.validatePassword}/>
                <br />
                <br />
                <input type="submit" id="subButton" disabled={hide} />
              </form>
                <div id="eError">{emailError}</div>
                <div id="uError">{usernameError}</div>
                <div id="pError">{passwordError}</div>
                <div className="signUpError">{this.state.signUpError}</div>
                <br />
                <div id="alreadyUser" onClick={this.goToLogin}>Already a user? Click here.</div>
                <div id="notUser" onClick={this.goToMainMenu}>Back</div>
            </div>
          </div>
        </div>
        );
    }
});
module.exports = Signup;