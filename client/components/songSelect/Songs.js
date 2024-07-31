Songs = React.createClass({
    getInitialState: function(){
      var currSong = store.getState().selectedSong;
      return {currSong: currSong};
    },
    render: function() {
      var that = this;
        return (
          <div className="carousel-body">
          {this.props.songList.map(function(e, i, c){
            var selected = classNames('songlistitem'+e.id.toString(), {'selectedsong': e.id === that.state.currSong.id});
            return (<span className={selected} key={i} data={e.id}>
            <div className="song-card-title">{e.title}</div>
            <div className="song-card-artist">{e.artist}<span className="song-card-bpm">{e.BPM} BPM</span></div>
            <div className="song-card-diff">Easy: {e.diff[0]} <span className="song-card-score">Score: {that.props.scores[i][0]}</span></div>
            <div className="song-card-diff">Medium: {e.diff[1]} <span className="song-card-score">Score: {that.props.scores[i][1]}</span></div>
            <div className="song-card-diff">Hard: {e.diff[2]} <span className="song-card-score">Score: {that.props.scores[i][2]}</span></div>
            <br />
            </span>
          )})}
          </div>
        );
    }
});
module.exports = Songs;
