Health = React.createClass({
	render: function(){
		var health = this.props.health;
		return (
				<span>HP: <progress max="100" value={health} className="healthBar"></progress></span>
			);
	}
});

module.exports = Health;
