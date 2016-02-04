var createScoresArray = require('./createScoresArray.js');
var ByDifficulty = require('./ByDifficulty.js');
var SongDropDown = require('./SongDropDown.js')

Leader = React.createClass({
	getInitialState: function(){
		return {
			songsWithScores: createScoresArray([]),
			currentSong: songList[0],
			numberOfLeaders: 3
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
			}.bind(this),
			error: function(err){
				console.log('error: ', err);
			}.bind(this)
		})
	},
	goToMainMenu: function(){
	  store.dispatch(navigateToPage('MAIN'));
	},
	updateSong: function(songId){
		this.setState({currentSong: this.state.songsWithScores[songId] });
	},
	render: function(){

		return(
			<div id="leaderContain">
				<h1>Leaderboard</h1>
				<SongDropDown updateSong={this.updateSong} songs={this.state.songsWithScores}/>
					<div className="leaderCard">
						<div className="leader-card-title">{this.state.currentSong.title}</div>
						<div className="leader-card-artist">{this.state.currentSong.artist}</div>
						<div className="easyScore"><h3>easy</h3>
						{this.state.currentSong.easy.slice(0,this.state.numberOfLeaders).map(function(userScore, index, allEasyScores){
							return(
								<ByDifficulty username={userScore[0]} score={userScore[1]} key={index}/>
								)
							})}
						</div>
						<div className="mediumScore"><h3>medium</h3>
						{this.state.currentSong.medium.slice(0,this.state.numberOfLeaders).map(function(userScore, index, allEasyScores){
							return(
								<ByDifficulty username={userScore[0]} score={userScore[1]} key={index}/>
								)
							})}
						</div>
						<div className="hardScore"><h3>hard</h3>
						{this.state.currentSong.hard.slice(0,this.state.numberOfLeaders).map(function(userScore, index, allEasyScores){
							return(
								<ByDifficulty username={userScore[0]} score={userScore[1]} key={index}/>
								)
							})}
						</div>
					</div>
				<div className="clicky" id="back" onClick={this.goToMainMenu}>
	        <h3>Back</h3>
	      </div>	
			</div>

			);	
	}
});
module.exports = Leader;