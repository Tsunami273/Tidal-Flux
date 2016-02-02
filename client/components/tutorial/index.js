var Notes = require('../songPlay/Notes.js');
var beatMaps = require('./map.js');
var findMeasureStartTimes = require('../songPlay/functionDump.js').findMeasureStartTimes;
var findNoteTimes = require('../songPlay/functionDump.js').findNoteTimes;
var makeKeyBinds = require('../songPlay/keys.js');
var navKeys = require('../navKeys.js');
var Judgement = require('../songPlay/Judgement.js');
offsetArr = [];
intervalID = [];


Tutorial = React.createClass({
    getInitialState: function() {
      var globalState = store.getState()
      var scrollSpeed = globalState.durations[globalState.scrollSpeed-1];
      return {
        playhead: 0,
        timer: 0,
        offset: 0,
        avgOffset: 0,
        notes: [[],[],[],[],[],[]],
        hits: [[],[],[],[],[],[]],
        lane0: false,
        lane1: false,
        lane2: false,
        lane3: false,
        lane4: false,
        lane5: false,
        message: '',
        messageArray: [],
        judgements: {
          Perfect: 0,
          Good: 0,
          Decent: 0,
          Miss: 0,
          health: 100,
          combo: 0,
        },
        noteScoreValues: {
          Perfect: 0,
          Good: 0,
          Decent: 0,
          Miss: 0
        },
        scrollSpeed: scrollSpeed,
      };
    },
    back: function(){
      store.dispatch(navigateToPage('MAIN'));
    },
    componentDidMount: function() {
      start = Date.now();
      var curr = store.getState();
      var currDiff = curr.selectedDiff;
      var currSong = curr.selectedSong; 
      var currOffset = curr.globalOffset;
      var timedBeatMap = findMeasureStartTimes(beatMaps[0][currDiff], currSong.BPM);
      var noteTimes = findNoteTimes(timedBeatMap, currOffset);
      var combos = [];
      var keys = store.getState().keyBinds; 
      var totalNotes = 0;
      for(var i = 0 ; i < 6; i++){
        combos.push(makeKeyBinds(this,keys[i], i));
        totalNotes += noteTimes[i].length;
      }
      combos.push(navKeys(this, 'esc', this.back));
      listener.register_many(combos);
      offsetArr = [];
      intervalID = [];
      this.setState({noteTimes: noteTimes});
    },
    componentWillUnmount: function(event){
      listener.reset();
      intervalID.forEach(function(e,i,c){
        clearInterval(e);  
      });
    },
    loadedSong: function(event){
      start = Date.now();
      var that = this; 
      this.refs.audio.play();

      var polling = setInterval(function(){ 
        var currTime = Date.now() - start - that.state.avgOffset;
        var notes = that.state.notes.slice();
        var message = that.state.message;
        var combo = that.state.combo;
        var judgements = {};
        var messageArray = that.state.messageArray.slice();
        Object.assign(judgements,that.state.judgements);
        for(var i = 0 ; i < 6; i++){
          if(notes[i][0] + 150 < currTime){
            notes[i].shift();
            message = 'Miss';
            judgements.Miss++;
            messageArray = ['Miss' + judgements.Miss];
            judgements.combo = 0; 
          }
        }
        that.setState({notes: notes,
          message: message,
          judgements: judgements,
          messageArray: messageArray});
      }, 10);

      var staging = setInterval(function(){
        var stagedNotes = that.state.notes.slice();
        var grabTime = Date.now()-start + 4500;
        var noteTimes = that.state.noteTimes;
        for(var i = 0; i < 6; i++){
          var length = noteTimes[i].length;
          for(var k = length-1; k > -1; k--){
            if(noteTimes[i][k] > grabTime){
              break;
            }
            stagedNotes[i].push(noteTimes[i].pop());
          }
        }
        that.setState({notes: stagedNotes});
      }, 1000);

      intervalID.push(polling);
      intervalID.push(staging);
    },
    updatePlayhead: function(event){
      var playhead = this.refs.audio.currentTime;
      var timeNoOffset = Date.now() - start;
      if(timeNoOffset !== playhead){  
        var offset = timeNoOffset - (playhead*1000);
        this.setState({offset: offset});
        var avgOffset = this.state.avgOffset;
        var length = offsetArr.length || 1;
        offsetArr.push(offset);
        if(length === 20){
            offsetArr.shift();
        }
        offsetArr.forEach(function(e,i,c){
          avgOffset += e;
        });
        avgOffset = avgOffset / length;
      }
      this.setState({avgOffset: avgOffset});
      this.setState({playhead: playhead});
    },
    render: function() {
        var audioSource = store.getState().selectedSong;
        return (
        <div className="song-play-contain">
          <div onClick={this.back}>Back</div>
          <audio src={'./songs/' + audioSource.id + '/' + audioSource.id + '.ogg'} 
          onCanPlay={this.loadedSong} 
          onEnded={this.play}
          onTimeUpdate={this.updatePlayhead}
          ref='audio'
          ></audio>
          <div className="instructions" id="instruct-top">Notes will fall down from the top of the screen.</div>
          <div className="instructions" id="instruct-bottom-left">When the notes reach this bar, press the corresponding key to hit them. </div>
          <div className="track-wrapper-tutorial">
          <Judgement messages={this.state.messageArray} combo={this.state.judgements.combo}/>
          <Notes songState={this} stagedNotes={this.state.notes} />
          </div>
          <div className="tutorial-keys">S D F J K L</div>
        </div>
        );
    }
});

module.exports = Tutorial;