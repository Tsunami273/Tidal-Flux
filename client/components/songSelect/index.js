// import child components here.

SongSelect = React.createClass({
    play: function(event) {
      store.dispatch({
        type: 'NAVIGATE',
        page: 'PLAY'
      });
    },
    render: function() {
        return (
        <div>
          <h1>Song Select</h1>
          <br />
          <div className="clicky" onClick={this.play}>Play Song</div>
        </div>
        );
    }
});
module.exports = SongSelect;
