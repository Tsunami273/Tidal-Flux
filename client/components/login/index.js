// import child components here.

Login = React.createClass({
    login: function(event) {
      store.dispatch({
        type: 'NAVIGATE',
        page: 'LOGIN'
      });
    },
    goToSignup: function(event){
      store.dispatch(navigateToPage('SIGNUP'));
    },
    render: function() {
        return (
        <div>
          <h1>Login Page</h1>
          <form>
            <p>Email/Username</p>
              <input type="text" name="email"></input>
            <br />
            <p>Password</p>
              <input type="text" name="password"></input>
            <br />
          </form>
          <p>I forgot my password!</p>
          <div className="clicky" onClick={this.goToSignup}>Not a user yet? Signup here</div>
        </div>
        );
    }
});
module.exports = Login;