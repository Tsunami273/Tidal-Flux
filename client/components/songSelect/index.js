// import child components here.
var NavButton = require('../navButton.js');
var Songs = require('./Songs.js');
songList = [
  {title:'Ice Angel', 
  artist:'Yooh',
  id: 1},
  {title:'Chinese Restaurant',
  artist:'Memme',
  id: 2}, 
  {title:'Old Yuanxian',
  artist:'Demetori',
  id:3}
];

SongSelect = React.createClass({
    play: function(event) {
      store.dispatch(navigateToPage('PLAY'));
    },
    render: function() {
      var audioSource = store.getState().selectedSong;
      // if(!audioSource){
        // store.dispatch(selectSong(songList[0]));
        // return (<div>loading...</div>);
      // }
      var nowPlaying = audioSource ? 'Now Playing: ' + audioSource.title : '';
        return (
        <div>
          <h1>Song Select</h1>
          <h2>{nowPlaying}</h2>
          <Songs songList={songList} />
          <br />
          <NavButton dest="Play Song" onClick={this.play} />
          <audio src={'./songs/' + audioSource.id + '.ogg'} autoPlay></audio>
        </div>
        );
    }
});
module.exports = SongSelect;
