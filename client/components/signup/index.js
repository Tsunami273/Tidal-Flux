// import child components here.

Signup = React.createClass({
    signup: function(event) {
      store.dispatch({
        type: 'NAVIGATE',
        page: 'SIGNUP'
      });
    },
    render: function() {
        return (
        <div>
          <h1>Sign Up Page</h1>
          <form>
          <p>Email</p>
          <input type="text" name="email"></input>
          <br />
          <p>Username</p>
          <input type="text" name="username"></input>
          <br />
          <p>Password</p>
          <input type="text" name="password"></input>
          <br />
          <p>confirm Password</p>
          <input type="text" name="confirmpassword"></input>
          </form>
        </div>
        );
    }
});
module.exports = Signup;