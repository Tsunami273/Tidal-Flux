// import child components here.
var NavButton = require('../navButton.js');
var Songs = require('./Songs.js');
var Diffs = require('./Diffs.js');
songList = require('./songList.js');

var currdeg = 0;

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
    rotatePrev: function() {

    },
    rotateNext: function() {

    },
    render: function() {
      var audioSource = store.getState().selectedSong;
        return (
        <div>
          <h1>Song Select</h1>
          <div id="carouselContain">
            <div id="carousel">
            <Songs songList={songList} />
            </div>
          </div>  
          <div id="difficulty">
            <Diffs ref="diff" diffs={this.state.diffs}/>
          </div>
          <br />
          <br />
          <NavButton dest="Play Song" onClick={this.play} />
          <br />
          <audio controls src={'./songs/' + audioSource.id + '/'+  audioSource.id + '.ogg'} autoPlay></audio>
        </div>
        );
    }
});
module.exports = SongSelect;
