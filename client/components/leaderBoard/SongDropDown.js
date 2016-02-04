var SongDropDown = React.createClass({
	setSong: function(event){
		var song = event.target.value;
		{this.props.updateSong(song-1)};
	},
	render: function(){
		return(
			<div>Choose a song to view the leaders:
				<select id="song-drop-down" onChange={this.setSong}>
					{this.props.songs.map(function(song, index){
						return(<option key={index} value={song.id}>{song.title}</option>)
					})}
				</select>
			</div>
		)
	}
})

module.exports = SongDropDown;