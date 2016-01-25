// import child components here.
var NavButton = require('../navButton.js');
var Songs = require('./Songs.js');
var Diffs = require('./Diffs.js');
var Scroll = require('./Scroll.js');
songList = require('./songList.js');
SongSelect = React.createClass({
    getInitialState: function(){
      var selectedSong = store.getState().selectedSong;
      return {
        diffs: ['Easy', 'Medium', 'Hard'],
        selectedSong: selectedSong
      }
    },
    play: function(event) {
      var diff = this.refs.diff.state.diff
      var scroll = this.refs.scroll.state.scroll;
      store.dispatch(selectSong(this.state.selectedSong));
      store.dispatch(navigateToPage('PLAY'));
      store.dispatch(setScroll(scroll));
      store.dispatch(setDiff(diff));
    },
    render: function() {
        return (
        <div>
          <h1>Song Select</h1>
          <div className="song-options-container">
            <Diffs ref="diff" diffs={this.state.diffs}/>
            <br />
            <Scroll ref="scroll" />
          </div>
          <br />
          <Songs songSelect={this} songList={songList} />
          <br />
          <NavButton dest="Play Song" onClick={this.play} />
          <br />
          <audio controls src={'./songs/' + this.state.selectedSong.id + '/'+  this.state.selectedSong.id + '.ogg'} autoPlay></audio>
        </div>
        );
    }
});
module.exports = SongSelect;
