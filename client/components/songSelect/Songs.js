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
            return <div className={selected} onClick={that.select.bind(that, e)} key={i} data={e.id}>{e.title} - {e.artist} <br /></div>
          })}
          </div>
        );
    }
});
module.exports = Songs;



