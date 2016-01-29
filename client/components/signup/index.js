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
      hide:'hidden'
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
      var emailError = '';
      if(!email.includes('@')){
        this.setState({emailError: 'not a valid email'});
        this.setState({hide:'hidden'});
      }
      else{
        this.setState({emailError: ''});
      }
      this.setState({email: event.target.value});
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
      }
      this.setState({username: event.target.value});
    },
    setPassword: function(event){
      this.setState({password: event.target.value});
    },
    validatePassword: function(event){
      if(this.state.password !== event.target.value){
        this.setState({passwordError:'passwords do not match'});
        this.setState({hide:'hidden'});
      }
      else{
        this.setState({passwordError: ''});
        if(this.state.usernameError === '' && this.state.emailError === ''){
          this.setState({hide:''});
        }
      }
      this.setState({confirmPassword: event.target.value});
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
          this.setState({signUpError: 'This username already exists'});
        }.bind(this)
      });
    },
    render: function() {
      var emailError = this.state.emailError ? 'Error, ' + this.state.emailError : '';
      var usernameError = this.state.usernameError ? 'Error, ' + this.state.usernameError : '';
      var passwordError = this.state.passwordError ? 'Error, ' + this.state.passwordError : '';
      var hide = this.state.hide;
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
                <input type="submit" id="subButton" className={hide}/>
              </form>
                <div id="pError">{passwordError}</div>
                <div id="eError">{emailError}</div>
                <div id="uError">{usernameError}</div>
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