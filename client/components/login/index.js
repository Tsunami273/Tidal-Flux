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
          <h1>Main Menu</h1>
          <br />
          <div className="clicky" onClick={this.play}>Play</div>
        </div>
        );
    }
});
module.exports = Login;