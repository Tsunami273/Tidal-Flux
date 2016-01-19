var Note = require('./Note.js');
Notes = React.createClass({
    render: function() {
      var songs = songList;
      var currSong = store.getState().selectedSong;
      currSong = currSong ? currSong : {};
      // console.log(this);
      var that = this;
        return (
          <div>
          {this.props.stagedNotes.map(function(result, i){
            return <Note className='notes' key={i}> </span>
          })}
          </div>
        );
    }
});
module.exports = Notes;