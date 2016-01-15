Songs = React.createClass({
    select: function(i) {
      console.log(this.props.songList[i]);
      store.dispatch(selectSong(this.props.songList[i]));
    },
    render: function() {
      var songs = songList;
      // console.log(this);
      var that = this;
        return (
          <div>
          {this.props.songList.map(function(result, i){
            return <div onClick={that.select.bind(that, i)} key={i} data={result.id}>{result.title} - {result.artist}</div>
          })}
          </div>
        );
    }
});
module.exports = Songs;