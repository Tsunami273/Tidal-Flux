Songs = React.createClass({
    select: function(i) {
      store.dispatch(selectSong(this.props.songList[i]));
    },
    render: function() {
      var currSong = store.getState().selectedSong;
      currSong = currSong ? currSong : {};
      var that = this;
        return (
          <div>
          {this.props.songList.map(function(result, i){
            var selected = classNames('songlistitem', {'selectedsong': currSong.id === result.id});
            return <span className={selected} onClick={that.select.bind(that, i)} key={i} data={result.id}>{result.title} - {result.artist} <br /></span>
          })}
          </div>
        );
    }
});
module.exports = Songs;
