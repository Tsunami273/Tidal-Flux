// import child components here.
var beatMaps = require('./maps/');

SongPlay = React.createClass({
    getInitialState: function() {
      return {
        playhead: 0,
        timer: 0,
        offset: 0,
        popup: false,
        notes: []
      };
    },
    play: function(event) {
      store.dispatch(navigateToPage('SCORE'));
    },
    loadedSong: function(event){
      // start progress timer.
      // var audioSource = store.getState().selectedSong;
      console.log(beatMaps[0]);
      // var globalOffset = 70;
      start = Date.now();
      var that = this;
      this.refs.audio.play();
      setInterval(function(){ // dont use this.state.timer since setInterval can lag.
                              // if you want to calculate the current progress at the time of an event
                              // use Date.now() - start
        var offset = that.state.offset
        var time = Date.now() - start;
        if(time > 2000){
          that.setState({popup: true});
        }
        that.setState({timer: time});
        that.setState({offsetTime: time - offset});

      }, 10);

    },
    updatePlayhead: function(event){
      var playhead = this.refs.audio.currentTime;
      var timeNoOffset = Date.now() - start;
      var offsetTime = timeNoOffset - this.state.offset;
      if(timeNoOffset !== playhead){
        console.log('playhead', playhead*1000);
        console.log('time no offset', timeNoOffset);
        console.log('offset time', offsetTime);
        var offset = timeNoOffset - (playhead*1000);
        this.setState({offset: offset});
      }
      this.setState({playhead: playhead});
    },
    render: function() {
        var audioSource = store.getState().selectedSong;
       // var fill = this.state.timer;
        var note = this.state.popup ? 'note' : '';
        return (
        <div>
          <h1>Song Play</h1>
          <div>playhead: {this.state.playhead}</div>
          <div>progress: {this.state.timer}</div>
          <div> time + offset: {this.state.offsetTime} </div>
          <div>offset: {this.state.offset}</div>
          <div>{note}</div>
          <audio controls src={'./songs/' + audioSource.id + '/' + audioSource.id + '.ogg'} 
          onCanPlay={this.loadedSong} 
          onEnded={this.play}
          onTimeUpdate={this.updatePlayhead}
          ref='audio'
          ></audio>
        </div>
        );
    }
});
module.exports = SongPlay;