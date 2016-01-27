Songs = React.createClass({
    getInitialState: function(){
      var currSong = store.getState().selectedSong;
      return {currSong: currSong};
    },
    select: function(song) {
      this.setState({currSong: song});
      this.props.songSelect.setState({selectedSong: song});
    },
    render: function() {
      var that = this;
        return (
          <div>
          {this.props.songList.map(function(e, i, c){
            var selected = classNames('songlistitem'+e.id.toString(), {'selectedsong': e.id === that.state.currSong.id});
            return (<span className={selected} key={i} data={e.id}>
            Title - {e.title}  
            <br />
            Artist - {e.artist}
            <br />
            BPM - {e.BPM}
            </span>
          )})}
          </div>
        );
    }
});
module.exports = Songs;
