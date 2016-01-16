// import child components here.
SongPlay = React.createClass({
    play: function(event) {
      store.dispatch(navigateToPage('SCORE'));
    },
    loadedSong: function(event){
      // start progress timer.
      this.refs.audio.play();
    },
    render: function() {
      var audioSource = store.getState().selectedSong;
        return (
        <div>
          <h1>Song Play</h1>
          <audio controls src={'./songs/' + audioSource.id + '.ogg'} 
          onCanPlay={this.loadedSong} 
          onEnded={this.play}
          ref='audio'
          ></audio>
        </div>
        );
    }
});
module.exports = SongPlay;