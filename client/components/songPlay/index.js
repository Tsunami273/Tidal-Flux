// import child components here.
var Notes = require('./Notes.js');
var beatMaps = require('./maps/');
var findMeasureStartTimes = require('./functionDump.js').findMeasureStartTimes;
var findNoteTimes = require('./functionDump.js').findNoteTimes;
var currSong = store.getState().selectedSong;
var timedBeatMap = findMeasureStartTimes(beatMaps[currSong.id-1], currSong.BPM);
var offsetArr = [];
var intervalID = [];
var noteTimes = findNoteTimes(timedBeatMap);


SongPlay = React.createClass({
    getInitialState: function() {
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
        judgements: {
          Perfect: 0,
          Good: 0,
          Decent: 0,
          Miss: 0
        }
      };
    },
    play: function(event) {
      intervalID.forEach(function(e,i,c){
        clearInterval(e);  
      });
      var score = this.state.score
      var judges = this.state.judgements
      store.dispatch(setScore(score, judges));
      store.dispatch(navigateToPage('SCORE'));
    },
    componentDidMount: function() {
      var scope = this;

      listener.register_many([
        {"keys": "s",
          "on_keydown": function(event){
            this.setState({lane0: true});
            var currTime = Date.now() - start - this.state.avgOffset;
            if(this.state.notes[0][0] > currTime - 150 && this.state.notes[0][0] < currTime + 150){
              var notes = this.state.notes.slice();
              var batting = Math.abs(this.state.notes[0][0] - currTime);
              console.log(batting);
              if(batting<40){
                judge = 'Perfect';
              }
              else if(batting<80){
                judge = 'Good';
              }
              else {
                judge = 'Decent'
              }
              notes[0].shift()
              var judgements = {};
              Object.assign(judgements,this.state.judgements);
              judgements[judge]++;

              this.setState({notes: notes,
              score: this.state.score + 100,
              message: judge,
              judgements: judgements});
            }
          },
          "on_keyup": function(event){
            this.setState({lane0: false});
          }, 
          "this": scope
        },
        {"keys": "d",
          "on_keydown": function(event){
            this.setState({lane1: true});
            var currTime = Date.now() - start - this.state.avgOffset;
            if(this.state.notes[1][0] > currTime - 150 && this.state.notes[1][0] < currTime + 150){
              var notes = this.state.notes.slice();
              var batting = Math.abs(this.state.notes[1][0] - currTime);
              console.log(batting);
              if(batting<40){
                judge = 'Perfect';
              }
              else if(batting<80){
                judge = 'Good';
              }
              else {
                judge = 'Decent'
              }
              notes[1].shift()
              var judgements = {};
              Object.assign(judgements,this.state.judgements);
              judgements[judge]++;

              this.setState({notes: notes,
              score: this.state.score + 100,
              message: judge,
              judgements: judgements});
            }
          },
          "on_keyup": function(event){
            this.setState({lane1: false});
          }, 
          "this": scope
        },
        {"keys": "f",
          "on_keydown": function(event){
            this.setState({lane2: true});
            var currTime = Date.now() - start - this.state.avgOffset;
            if(this.state.notes[2][0] > currTime - 150 && this.state.notes[2][0] < currTime + 150){
              var notes = this.state.notes.slice();
              var batting = Math.abs(this.state.notes[2][0] - currTime);
              console.log(batting);
              if(batting<40){
                judge = 'Perfect';
              }
              else if(batting<80){
                judge = 'Good';
              }
              else {
                judge = 'Decent'
              }
              notes[2].shift()
              var judgements = {};
              Object.assign(judgements,this.state.judgements);
              judgements[judge]++;

              this.setState({notes: notes,
              score: this.state.score + 100,
              message: judge,
              judgements: judgements});
            }
          },
          "on_keyup": function(event){
            this.setState({lane2: false});
          }, 
          "this": scope
        },
        {"keys": "j",
          "on_keydown": function(event){
            this.setState({lane3: true});
            var currTime = Date.now() - start - this.state.avgOffset;
            if(this.state.notes[3][0] > currTime - 150 && this.state.notes[3][0] < currTime + 150){
              var notes = this.state.notes.slice();
              var batting = Math.abs(this.state.notes[3][0] - currTime);
              console.log(batting);
              if(batting<40){
                judge = 'Perfect';
              }
              else if(batting<80){
                judge = 'Good';
              }
              else {
                judge = 'Decent'
              }
              notes[3].shift()
              var judgements = {};
              Object.assign(judgements,this.state.judgements);
              judgements[judge]++;

              this.setState({notes: notes,
              score: this.state.score + 100,
              message: judge,
              judgements: judgements});
            }
          },
          "on_keyup": function(event){
            this.setState({lane3: false});
          }, 
          "this": scope
        },
        {"keys": "k",
          "on_keydown": function(event){
            this.setState({lane4: true});
            var currTime = Date.now() - start - this.state.avgOffset;
            if(this.state.notes[4][0] > currTime - 150 && this.state.notes[4][0] < currTime + 150){
              var notes = this.state.notes.slice();
              var batting = Math.abs(this.state.notes[4][0] - currTime);
              console.log(batting);
              if(batting<40){
                judge = 'Perfect';
              }
              else if(batting<80){
                judge = 'Good';
              }
              else {
                judge = 'Decent'
              }
              notes[4].shift()
             var judgements = {};
              Object.assign(judgements,this.state.judgements);
              judgements[judge]++;

              this.setState({notes: notes,
              score: this.state.score + 100,
              message: judge,
              judgements: judgements});
            }
          },
          "on_keyup": function(event){
            this.setState({lane4: false});
          }, 
          "this": scope
        },
        {"keys": "l",
          "on_keydown": function(event){
            this.setState({lane5: true});
            var currTime = Date.now() - start - this.state.avgOffset;
            if(this.state.notes[5][0] > currTime - 150 && this.state.notes[5][0] < currTime + 150){
              var notes = this.state.notes.slice();
              var batting = Math.abs(this.state.notes[5][0] - currTime);
              console.log(batting);
              if(batting<40){
                judge = 'Perfect';
              }
              else if(batting<80){
                judge = 'Good';
              }
              else {
                judge = 'Decent'
              }
              notes[5].shift()
              var judgements = {};
              Object.assign(judgements,this.state.judgements);
              judgements[judge]++;

              this.setState({notes: notes,
              score: this.state.score + 100,
              message: judge,
              judgements: judgements});
            }
          },
          "on_keyup": function(event){
            this.setState({lane5: false});
          }, 
          "this": scope
        }]);
    },
    componentWillUnmount: function(event){
      listener.reset()
      console.log('unmounting');
    },
    loadedSong: function(event){
      // this event triggers when the song is ready to be played
      // AND when user moves the playhead. 
      // you will get errors if you try to move the playhead because the interval will not be cleared.
      // the user will not be able to move the playhead so fixing this is not important atm. 

      // store.getState().globalOffset() //==> add this to start
      start = Date.now();
      var that = this; 
      this.refs.audio.play();
      var polling = setInterval(function(){ // dont use this.state.timer since setInterval can lag.
                              // if you want to calculate the current progress at the time of an event
                              // use Date.now() - start
        var currTime = Date.now() - start - that.state.avgOffset;
        var notes = that.state.notes.slice();
        var message = that.state.message;
        var judgements = {};
        Object.assign(judgements,that.state.judgements);
        for(var i = 0 ; i < 6; i++){
          if(notes[i][0] + 150 < currTime){
              notes[i].shift();
              message = 'Miss';
              judgements.Miss++
          }
        }
        that.setState({notes: notes,
          message: message,
          judgements: judgements});
        // that.setState({timer: time});
      }, 10);
      var staging = setInterval(function(){
        var stagedNotes = that.state.notes.slice();
        var grabTime = Date.now()-start + 3500;
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
      var offsetTime = timeNoOffset - this.state.offset;
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
          <div>playhead: {this.state.playhead}</div>
          <div>offset: {this.state.offset}</div>
          <div>average offset: {this.state.avgOffset}</div>
          <div>{this.state.score}</div>
          <h1 className="judgetext">{this.state.message}</h1>
          <audio controls src={'./songs/' + audioSource.id + '/' + audioSource.id + '.ogg'} 
          onCanPlay={this.loadedSong} 
          onEnded={this.play}
          onTimeUpdate={this.updatePlayhead}
          ref='audio'
          ></audio>
          <br />
          <Notes songState={this} stagedNotes={this.state.notes} />
        </div>
        );
    }
});

module.exports = SongPlay;
