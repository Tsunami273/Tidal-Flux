var createScoresArray = require('./createScoresArray.js');
var ByDifficulty = require('./ByDifficulty.js');
var SongDropDown = require('./SongDropDown.js')

Leader = React.createClass({
	getInitialState: function(){
		return {
			songsWithScores:[],
			currentSongId: null
		}
	},
	componentDidMount: function(){
		$.ajax({
			url: '/api/scores/',
			dataType: 'json',
			type: 'GET',
			success: function(data){
				var songsWithScores = createScoresArray(data);
				this.setState({songsWithScores: songsWithScores});
				console.log('this.state', this.state);
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
		var that = this;

		return(
			
			<div id="leaderContain">
				<SongDropDown songsWithScores={this.state.songWithScores}/>
				<h1>Leader Board</h1>
				{this.state.songsWithScores.map(function(song, index, allSongs){
					return(
					<div className="leaderCard" key={index}>
						<div className="leader-card-title">{song.title}</div>
						<div className="leader-card-artist">{song.artist}</div>
						<div className="easyScore"><h3>easy</h3>
						{song.easy.map(function(userScore, index, allEasyScores){
							return(
								<ByDifficulty username={userScore[0]} score={userScore[1]} key={index}/>
								)
							})}
						</div>
						<div className="mediumScore"><h3>medium</h3>
						{song.medium.map(function(userScore, index, allEasyScores){
							return(
								<ByDifficulty username={userScore[0]} score={userScore[1]} key={index}/>
								)
							})}
						</div>
						<div className="hardScore"><h3>hard</h3>
						{song.hard.map(function(userScore, index, allEasyScores){
							return(
								<ByDifficulty username={userScore[0]} score={userScore[1]} key={index}/>
								)
							})}
						</div>
					</div>
						)
					})}
				<div className="clicky" id="back" onClick={this.goToMainMenu}>
	        <h3>Back</h3>
	      </div>	
			</div>

			);	
	}
});
module.exports = Leader;