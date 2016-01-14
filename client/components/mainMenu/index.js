// import child components here.

MainMenu = React.createClass({
    play: function(event) {
      store.dispatch({
        type: 'NAVIGATE',
        page: 'SELECT'
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
module.exports = MainMenu;
