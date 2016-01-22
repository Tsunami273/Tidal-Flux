// import child components here.
var NavButton = require('../navButton.js');
var Songs = require('./Songs.js');
var Diffs = require('./Diffs.js');
songList = require('./songList.js');
SongSelect = React.createClass({
    getInitialState: function(){
      return {
        diffs: ['Easy', 'Medium', 'Hard']
      }
    },
    play: function(event) {
      var diff = this.refs.diff.state.diff
      store.dispatch(navigateToPage('PLAY'));
      store.dispatch(setDiff(diff));
    },
    render: function() {
      var audioSource = store.getState().selectedSong;
        return (
        <div>
          <h1>Song Select</h1>
          <Diffs ref="diff" diffs={this.state.diffs}/>
          <br />
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
