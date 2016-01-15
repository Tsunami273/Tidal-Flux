// import child components here.
NavButton = require('../navButton.js');

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
          <NavButton dest="Finished" onClick={this.play} />
        </div>
        );
    }
});
module.exports = SongPlay;