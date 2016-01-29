var ByDifficulty = React.createClass({
	render: function(){
		return(
			<div>
				username - {this.props.username}
			<br />
				score - {this.props.score}
			</div>
		)
	}
})

module.exports = ByDifficulty;