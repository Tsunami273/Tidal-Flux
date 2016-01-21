// import child components here.
var NavButton = require('../navButton.js');
var Songs = require('./Songs.js');
songList = require('./songList.js');
SongSelect = React.createClass({
    play: function(event) {
      store.dispatch(navigateToPage('PLAY'));
    },
    render: function() {
      var audioSource = store.getState().selectedSong;
        return (
        <div>
          <h1>Song Select</h1>
          <Songs songList={songList} />
          <br />
          <NavButton dest="Play Song" onClick={this.play} />
          <br />
          <audio controls src={'./songs/' + audioSource.id + '/'+  audioSource.id + '.ogg'} autoPlay></audio>
        </div>
        );
    }
});
module.exports = SongSelect;
