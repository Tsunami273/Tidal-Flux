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
      passwordError: ''
      };
    },
    validateEmail: function(event) {
      var email = event.target.value;
      var emailError = '';
      if(!email.includes('@')){
        this.setState({emailError: 'not a valid email'});
      }
      else{
        this.setState({emailError: ''});
      }
      this.setState({email: event.target.value});
    },
    validateUsername: function(event){
      var username = event.target.value;
      var usernameError = '';
      if(username.length <= 4){
        this.setState({usernameError: 'Username must be at least 4 characters'});
      }
      else if(username.length > 16){
        this.setState({usernameError: 'Username must be less than 16 characters'});
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
      }
      else{
        this.setState({passwordError: ''});
      }
      this.setState({confirmPassword: event.target.value});
    },
    render: function() {
      var emailError = this.state.emailError ? 'Error, ' + this.state.emailError : '';
      var usernameError = this.state.usernameError ? 'Error, ' + this.state.usernameError : '';
      var passwordError = this.state.passwordError ? 'Error, ' + this.state.passwordError : '';
        return (
        <div>
          <h1>Sign Up Page</h1>
          <form>
            Email: <input type="input" value={this.state.email} onChange={this.validateEmail}/>
            <br />
            {emailError}
            <br />
            Username: <input type="text" value={this.state.username} onChange={this.validateUsername}/>
            <br />
            {usernameError}
            <br />
            Password: <input type="password" value={this.state.password} onChange={this.setPassword}/>
            <br />
            Confirm Password: <input type="password" value={this.state.confirmPassword} onChange={this.validatePassword}/>
            <br />
            {passwordError}
          </form>
        </div>
        );
    }
});
module.exports = Signup;