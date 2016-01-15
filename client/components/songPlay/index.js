// import child components here.
var NavButton = require('../navButton.js');
 
SongPlay = React.createClass({
    play: function(event) {
      store.dispatch(navigateToPage('SCORE'));
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