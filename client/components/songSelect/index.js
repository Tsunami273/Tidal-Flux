// import child components here.
var NavButton = require('../navButton.js');
var Songs = require('./Songs.js');
var Diffs = require('./Diffs.js');
var Scroll = require('./Scroll.js');
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
      var scroll = this.refs.scroll.state.scroll;
      store.dispatch(navigateToPage('PLAY'));
      store.dispatch(setScroll(scroll));
      store.dispatch(setDiff(diff));
    },
    rotatePrev: function() {
      currdeg = currdeg + 60;
      console.log(currdeg);
      this.refs.carousel.style.transform = "rotateY("+currdeg+"deg)";
    },
    rotateNext: function() {
      currdeg = currdeg - 60;
      console.log(currdeg);
      this.refs.carousel.style.transform = "rotateY("+currdeg+"deg)";
    },
    render: function() {
      var audioSource = store.getState().selectedSong;
        return (
        <div>
          <div id="songSelectLogo">
          <h1>Song Select</h1>
          </div>
          <div id="carouselContain">
            <div id="carousel" ref="carousel">
            <Songs songList={songList} />
            </div>
          </div>  
          <div className="song-options-container">
            <Diffs ref="diff" diffs={this.state.diffs}/>
            <br />
            <Scroll ref="scroll" />
          </div>
          <br />
          <br />
          <NavButton dest="Play Song" onClick={this.play} />
          <br />
          <audio controls src={'./songs/' + audioSource.id + '/'+  audioSource.id + '.ogg'} autoPlay></audio>
          <div id="next" onClick={this.rotateNext}>Next</div>
          <div id="prev" onClick={this.rotatePrev}>Prev</div>
        </div>
        );
    }
});
module.exports = SongSelect;
