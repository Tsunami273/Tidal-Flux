// import child components here.

Login = React.createClass({
    getInitialState: function() {
      return {
      username: '', 
      password: '', 
      usernameError: '',
      hide:'hidden'
      };
    },
    goToSignup: function(event){
      store.dispatch(navigateToPage('SIGNUP'));
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
        url: '/api/signin'/*waiting on route from Festus*/,
        dataType: 'json',
        type: 'POST',
        data: { username : this.state.username, password : this.state.password },
        success: function(data) {
          store.dispatch( { type:'SIGN_IN', username : data.username } );
          console.log('sign in succes')
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(status, err.toString());
          console.log('sign in error');
        }.bind(this)
      });
    },
    render: function() {
      var usernameError = this.state.usernameError ? 'Error, ' + this.state.usernameError : '';
      var hide = this.state.hide;
        return (
        <div>
          <h1>Login Page</h1>
          <form onSubmit={this.sendCredentialsToServer}>
            <br />
            Username: <input type="text" value={this.state.username} onChange={this.validateUsername}/>
            <br />
            {usernameError}
            <br />
            Password: <input type="password" value={this.state.password} onChange={this.setPassword}/>
            <br />
            <input type="submit" className={hide}/>
          </form>
        </div>
        );
    }
});
module.exports = Login;