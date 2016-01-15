// import child components here.

Login = React.createClass({
    login: function(event) {
      store.dispatch({
        type: 'NAVIGATE',
        page: 'LOGIN'
      });
    },
    render: function() {
        return (
        <div>
          <h1>Login Page</h1>
          <br />
          <input type="text">emailadfas</input>
          <div className="clicky" onClick={this.play}>Play</div>
        </div>
        );
    }
});
module.exports = Login;