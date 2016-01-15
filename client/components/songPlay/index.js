// import child components here.

SongPlay = React.createClass({
    play: function(event) {
      store.dispatch({
        type: 'NAVIGATE',
        page: 'SCORE'
      });
    },
    render: function() {
        return (
        <div>
          <h1>Song Play</h1>
          <br />
          <div className="clicky" onClick={this.play}>Finished</div>
        </div>
        );
    }
});
module.exports = SongPlay;