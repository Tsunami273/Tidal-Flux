// import child components here.
var Notes = require('./Notes.js');
var beatMaps = require('./maps/');
var findMeasureStartTimes = require('./functionDump.js').findMeasureStartTimes;
var findNoteTimes = require('./functionDump.js').findNoteTimes;
var makeKeyBinds = require('./keys.js');
var Judgement = require('./Judgement.js');
var Health = require('./Health.js')
offsetArr = [];
intervalID = [];


SongPlay = React.createClass({
    getInitialState: function() {
      var globalState = store.getState()
      var scrollSpeed = globalState.durations[globalState.scrollSpeed-1];
      return {
        playhead: 0,
        timer: 0,
        offset: 0,
        avgOffset: 0,
        notes: [[],[],[],[],[],[]],
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
      };
    },
    play: function(event) {
      intervalID.forEach(function(e,i,c){
        clearInterval(e);  
      });
      listener.reset();
      var score = this.state.score
      var judges = this.state.judgements
      store.dispatch(setScore(score, judges));
      store.dispatch(navigateToPage('SCORE'));
    },
    back: function(){
      store.dispatch(navigateToPage('SELECT'));
    },
    componentDidMount: function() {
      start = Date.now();
      var combos = [];
      var keys = store.getState().keyBinds; 
      for(var i = 0 ; i < 6; i++){
        combos.push(makeKeyBinds(this,keys[i], i));
      }
      listener.register_many(combos);
      var curr = store.getState();
      var currDiff = curr.selectedDiff;
      var currSong = curr.selectedSong; 
      var currOffset = curr.globalOffset;
      var timedBeatMap = findMeasureStartTimes(beatMaps[currSong.id-1][currDiff], currSong.BPM);
      offsetArr = [];
      intervalID = [];
      var noteTimes = findNoteTimes(timedBeatMap, currOffset);
      this.setState({noteTimes: noteTimes});
    },
    componentWillUnmount: function(event){
      listener.reset();
      intervalID.forEach(function(e,i,c){
        clearInterval(e);  
      });
    },
    loadedSong: function(event){
      // this event triggers when the song is ready to be played
      // AND when user moves the playhead. 
      // you will get errors if you try to move the playhead because the interval will not be cleared.
      // the user will not be able to move the playhead so fixing this is not important atm. 

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
            judgements.health = judgements.health - 10;
            judgements.combo = 0; 
            if(judgements.health < 0){
              return that.play();
            }
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
        <div>
          <h1>Song Play</h1>
          <Health health={this.state.judgements.health}/>
          <div>playhead: {this.state.playhead}</div>
          <div>{this.state.score}</div>
          <div onClick={this.back}>Back</div>
          <Judgement messages={this.state.messageArray} combo={this.state.judgements.combo}/>
          <audio controls src={'./songs/' + audioSource.id + '/' + audioSource.id + '.ogg'} 
          onCanPlay={this.loadedSong} 
          onEnded={this.play}
          onTimeUpdate={this.updatePlayhead}
          ref='audio'
          ></audio>
          <Notes songState={this} stagedNotes={this.state.notes} />
        </div>
        );
    }
});

module.exports = SongPlay;
