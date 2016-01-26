// import child components here.
var NavButton = require('../navButton.js');
var Songs = require('./Songs.js');
var Diffs = require('./Diffs.js');
var Scroll = require('./Scroll.js');
songList = require('./songList.js');
var currdeg = 0;

SongSelect = React.createClass({
    getInitialState: function(){
      var selectedSong = store.getState().selectedSong;
      return {
        diffs: ['Easy', 'Medium', 'Hard'],
        selectedSong: selectedSong
      }
    },
    back: function(){
      store.dispatch(navigateToPage('MAIN'));
    },
    play: function(event) {
      var diff = this.refs.diff.state.diff
      var scroll = this.refs.scroll.state.scroll;
      store.dispatch(selectSong(this.state.selectedSong));
      store.dispatch(navigateToPage('PLAY'));
      store.dispatch(setScroll(scroll));
      store.dispatch(setDiff(diff));
    },
    rotatePrev: function() {
      currdeg = currdeg + 60;
      this.refs.carousel.style.transform = "rotateY("+currdeg+"deg)";
      var index;
      var dogdeg = currdeg % 360;
      switch(dogdeg){
        case -300:
        case 60: 
          index = 5; 
          break;
        case -240:
        case 120: 
          index = 4;
          break
        case -180:
        case 180:
          index = 3;
          break;
        case -120:
        case 240:
          index = 2;
          break;
        case -60:
        case 300:
          index = 1;
          break;
        case 0:
          index = 0;
          break;
      }
      var currsong = songList[index];
      this.setState({selectedSong: currsong});
    },
    rotateNext: function() {
      currdeg = currdeg - 60;
      console.log(currdeg);
      var dogdeg = currdeg % 360;
      switch(dogdeg){
        case 300:
        case -60: 
          index = 1; 
          break;
        case 240:
        case -120: 
          index = 2;
          break
        case 180:
        case -180:
          index = 3;
          break;
        case 120:
        case -240:
          index = 4;
          break;
        case 60:
        case -300:
          index = 5;
          break;
        case 0:
          index = 0;
          break;
      }
      this.refs.carousel.style.transform = "rotateY("+currdeg+"deg)";
      var currsong = songList[index];
      this.setState({selectedSong: currsong});
    },
    render: function() {
        return (
        <div>
            <div id="songSelectLogo">
              <h1>Song Select</h1>
            </div>
          <br />
          <div id="carouselContain">
            <div id="carousel" ref="carousel">
            <Songs songSelect={this} songList={songList} />
          </div>
          </div>

          <div id="carouselButtons">
            <div id="prev" onClick={this.rotatePrev}>
              <img src="prev.svg" alt="Prev"></img>
            </div>  

            <div id="next" onClick={this.rotateNext}>
            <img src="next.svg" alt="Next"></img>
            </div>
          </div>

          <div className="song-options-container">
            <Diffs ref="diff" diffs={this.state.diffs}/>
            <br />
            <Scroll ref="scroll" />
          <audio src={'./songs/' + this.state.selectedSong.id + '/'+  this.state.selectedSong.id + '.ogg'} autoPlay></audio>
          <div id="playsong" onClick={this.play}>
          <h3>Play</h3>
          </div>
          <div id="back" onClick={this.back}>
          <h3>Back</h3>
          </div>
          </div>
          <br />
          <br />
          <br />
        </div>
        );
    }
});
module.exports = SongSelect;
