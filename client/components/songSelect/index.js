// import child components here.
var NavButton = require('../navButton.js');

SongSelect = React.createClass({
    play: function(event) {
      store.dispatch(navigateToPage('PLAY'));
    },
    render: function() {
        return (
        <div>
          <h1>Song Select</h1>
          <br />
          <NavButton dest="Play Song" onClick={this.play} />
        </div>
        );
    }
});
module.exports = SongSelect;
