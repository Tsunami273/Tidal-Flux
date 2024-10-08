// import child components here.
var Notes = require('./Notes.js');
var beatMaps = require('./maps/');
var findMeasureStartTimes = require('./functionDump.js').findMeasureStartTimes;
var findNoteTimes = require('./functionDump.js').findNoteTimes;
var makeKeyBinds = require('./keys.js');
var navKeys = require('../navKeys.js');
var Judgement = require('./Judgement.js');
var Health = require('./Health.js')
offsetArr = [];
intervalID = [];


SongPlay = React.createClass({
    getInitialState: function() {
      var globalState = store.getState()
      var scrollSpeed = globalState.durations[globalState.scrollSpeed-1];
      var noFail = globalState.noFail;
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
        score: 0,
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
        scrollSpeed: scrollSpeed,
        noFail: noFail
      };
    },
    play: function(event) {
      intervalID.forEach(function(e,i,c){
        clearInterval(e);  
      });
      listener.reset();
      var score = Math.round(this.state.score);
      var judges = this.state.judgements
      var hits = this.state.hits
      store.dispatch( setScore(score, judges, hits) );
    },
    back: function(){
      store.dispatch(navigateToPage('SELECT'));
    },
    componentDidMount: function() {
      start = Date.now();
      var curr = store.getState();
      var currDiff = curr.selectedDiff;
      var currSong = curr.selectedSong; 
      var currOffset = curr.globalOffset;
      var timedBeatMap = findMeasureStartTimes(beatMaps[currSong.id-1][currDiff], currSong.BPM);
      var noteTimes = findNoteTimes(timedBeatMap, currOffset);
      var combos = [];
      var keys = store.getState().keyBinds; 
      var totalNotes = 0;
      for(var i = 0 ; i < 6; i++){
        combos.push(makeKeyBinds(this,keys[i], i));
        totalNotes += noteTimes[i].length;
      }
      combos.push(navKeys(this, 'esc', this.back));
      combos.push(navKeys(this, 'backspace', this.back));
      var noteScoreValue = 1000000 / totalNotes;
      var noteScoreValues = {perfect: noteScoreValue, 
        good: noteScoreValue * .8,
        decent: noteScoreValue * .5};
      listener.register_many(combos);
      offsetArr = [];
      intervalID = [];
      this.setState({noteTimes: noteTimes,
        noteScoreValues: noteScoreValues});
      let audio = $('audio')[0];
      if (audio) audio.volume = store.getState().volume / 100;
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
      this.refs.progressBar.max = this.refs.audio.duration;

      var polling = setInterval(function(){ 
        var currTime = Date.now() - start - that.state.avgOffset;
        that.refs.progressBar.value = currTime/1000;
        var notes = that.state.notes.slice();
        var hits = that.state.hits.slice();
        var message = that.state.message;
        var combo = that.state.combo;
        var judgements = {};
        var messageArray = that.state.messageArray.slice();
        Object.assign(judgements,that.state.judgements);
        for(var i = 0 ; i < 6; i++){
          if(notes[i][0] + 150 < currTime){
            notes[i].shift();
            hits[i].push(currTime);
            message = 'Miss';
            judgements.Miss++;
            messageArray = ['Miss' + judgements.Miss];
            judgements.health = judgements.health - 10;
            judgements.combo = 0; 
            if(judgements.health < 0 && !that.state.noFail){
              return that.play();
            }
          }
        }
        that.setState({notes: notes,
          message: message,
          judgements: judgements,
          messageArray: messageArray,
          hits: hits});
        if(judgements.health < 0 && !that.state.noFail){
          return that.play();
        };
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
        var noFail = this.state.noFail ? 'true' : 'false';
        var score = Math.round(this.state.score);
        return (
        <div className="song-play-contain">
          <div className="health-bar-contain"><Health health={this.state.judgements.health}/>
          <div className="progress-bar-contain"><progress max="100" value="0" ref="progressBar" id="progressBar"></progress> &nbsp; <br /> <div className='progress-bar-contain'>Progress</div></div>
          </div>
          <div className="play-score">Score: {score}</div>
          <div onClick={this.back}>Back</div>
          <audio src={'./songs/' + audioSource.id + '/' + audioSource.id + '.ogg'} 
          onCanPlay={this.loadedSong} 
          onEnded={this.play}
          onTimeUpdate={this.updatePlayhead}
          ref='audio'
          ></audio>
          <div className="track-wrapper">
          <Judgement messages={this.state.messageArray} combo={this.state.judgements.combo}/>
          <Notes songState={this} stagedNotes={this.state.notes} />
          </div>
        </div>
        );
    }
});

module.exports = SongPlay;
