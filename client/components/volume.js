Volume = React.createClass({
    getInitialState: function(){
      var volume = store.getState().volume;
      return {volume: volume};
    },
    changeVolume: function(value){
      store.dispatch(setVolume(value));
      let audio = $('audio')[0]
      if (audio) {
        audio.volume = value / 100;
      }
    },
    render: function() {
      return (
      <div>
        <input type="range" id="volume-slider" value={this.state.volume}
        onChange={e => this.changeVolume(e.target.value) } />
      </div>
      );
    }
});
module.exports = Volume;
