Health = React.createClass({
	render: function(){
		var health = this.props.health;
		return (
				<progress max="100" value={health} className="healthBar"></progress>
			);
	}
});

module.exports = Health;