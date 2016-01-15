// import child components here.

ScoreScreen = React.createClass({
    play: function(event) {
      store.dispatch({
        type: 'NAVIGATE',
        page: 'SELECT'
      });
    },
    render: function() {
        return (
        <div>
          <h1>Score Screen</h1>
          <br />
          <div className="clicky" onClick={this.play}>Done</div>
        </div>
        );
    }
});
module.exports = MainMenu;