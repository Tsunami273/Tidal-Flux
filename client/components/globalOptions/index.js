var NavButton = require('../navButton.js');

GOptions = React.createClass({
	goToMainMenu: function(event) {
		store.dispatch(navigateToPage('MAIN'));
	},

	render: function(event) {
		return (
		<div id="opContain">

			<div id="opTitle">
				<h1>Options</h1>
			</div>
			<br />
			<div id="offset" className="clickyGO">
				<h3>Offset</h3>
			</div>
			<div id="keyBindings" className="clickyGO">
				<h3>Key Bindings</h3>
			</div>
			<div id="bMainMenu" className="clickyGO" onClick={this.goToMainMenu}>
				<h3>Back to Main Menu</h3>
			</div>

		</div>
		);	
	}
});
module.exports = GOptions;

//offset
//keybindings