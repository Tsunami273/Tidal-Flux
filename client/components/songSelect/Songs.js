Songs = React.createClass({
    select: function(i) {
      store.dispatch(selectSong(this.props.songList[i]));
    },
    render: function() {
      var currSong = store.getState().selectedSong;
      var that = this;
        return (
          <div>
          {this.props.songList.map(function(result, i){
            var selected = classNames('songlistitem'+result.id.toString(), {'selectedsong': currSong.id === result.id});
            return <div className={selected} onClick={that.select.bind(that, i)} key={i} data={result.id}>{result.title} - {result.artist} <br /></div>
          })}
          </div>
        );
    }
});
module.exports = Songs;
