//Sort scores by song and difficulty
var ByDifficulty = React.createClass({
	render: function(){
		return(
			<div>
				{this.props.score}
			</div>
		)
	}
})

module.exports = ByDifficulty;