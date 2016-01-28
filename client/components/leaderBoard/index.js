Leader = React.createClass({
	componentDidMount: function(){
		$.ajax({
			url: '/api/scores/',
			dataType: 'json',
			type: 'GET',
			success: function(data){
				console.log('success');
			}.bind(this),
			error: function(err){
				console.log('error: ', err);
			}.bind(this)
		})
	},
	goToMainMenu: function(){
	  store.dispatch(navigateToPage('MAIN'));
	},
	render: function(){
		var songs = songList;
		return(
			<div>
				<div>Leader Board</div>
				{songs.map(function(song, index, allSongs){
					console.log('song: ', song);
					return(
						// <span key={index}> {song.title} </span> )
					<span key={index}>
						<br />
						Title - {song.title}
						<br />
						Artist - {song.artist}
						<br />
						BPM - {song.BPM}
					</span>)
				})
				}
				<div className="clicky" onClick={this.goToMainMenu}>
	        <h3>Back</h3>
	      </div>	
			</div>

			);	
	}
});
module.exports = Leader;