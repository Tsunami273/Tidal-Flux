var ByDifficulty = React.createClass({
	render: function(){
		return(
			<div>
				{this.props.username} - {this.props.score}
			</div>
		)
	}
})

module.exports = ByDifficulty;