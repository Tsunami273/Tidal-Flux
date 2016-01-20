// import child components here.
var Notes = require('./Notes.js');
var beatMaps = require('./maps/');
var findMeasureStartTimes = require('./functionDump.js').findMeasureStartTimes;
var findNoteTimes = require('./functionDump.js').findNoteTimes;
var timedBeatMap = findMeasureStartTimes(beatMaps[0], 185);
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
      };
    },
    play: function(event) {
      intervalID.forEach(function(e,i,c){
        clearInterval(e);  
      });
      store.dispatch(navigateToPage('SCORE'));
    },
    componentDidMount: function() {
      var scope = this;
      listener.register_many([
        {"keys": "s",
          "on_keydown": function(event){
            this.setState({lane0: true});
            var currTime = Date.now() - start - this.state.avgOffset;
            // for(var i = 0; i < this.state.notes[0].length; i++){
            console.log(this.state.notes[0]);
            if(this.state.notes[0][0] > currTime - 200 && this.state.notes[0][0] < currTime + 200){
              console.log('hit note');
              var notes = this.state.notes.slice();
              notes[0].shift()
              this.setState({notes: notes})
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
          },
          "on_keyup": function(event){
            this.setState({lane1: false});
          }, 
          "this": scope
        },
        {"keys": "f",
          "on_keydown": function(event){
            this.setState({lane2: true});
          },
          "on_keyup": function(event){
            this.setState({lane2: false});
          }, 
          "this": scope
        },
        {"keys": "j",
          "on_keydown": function(event){
            this.setState({lane3: true});
          },
          "on_keyup": function(event){
            this.setState({lane3: false});
          }, 
          "this": scope
        },
        {"keys": "k",
          "on_keydown": function(event){
            this.setState({lane4: true});
          },
          "on_keyup": function(event){
            this.setState({lane4: false});
          }, 
          "this": scope
        },
        {"keys": "l",
          "on_keydown": function(event){
            this.setState({lane5: true});
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
      // var polling = setInterval(function(){ // dont use this.state.timer since setInterval can lag.
      //                         // if you want to calculate the current progress at the time of an event
      //                         // use Date.now() - start
      //   var offset = that.state.offset
      //   var time = Date.now() - start;
      //   that.setState({timer: time});
      //   that.setState({offsetTime: time - offset});
      // }, 10);
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
      // intervalID.push(polling);
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
          <div>progress: {this.state.timer}</div>
          <div> time + offset: {this.state.offsetTime} </div>
          <div>offset: {this.state.offset}</div>
          <div>average offset: {this.state.avgOffset}</div>
          <div>{this.state.skey}</div>
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
          // {this.state.notes.map(function(e,i,c){  
          //   return e.map(function(e,i,c){return <span className={i}>{e}<br /></span>});
          // })}
module.exports = SongPlay;