var NavButton = require('../navButton.js');

GOptions = React.createClass({
	goToMainMenu: function(event) {
		store.dispatch(navigateToPage('mainMenu'));
	},

	render: function(event) {
		return (
			<div id="optionscontain">
				<div id="options">
					<h1>Options</h1>
				</div>
			</div>
		);	
	}
});
module.exports = GOptions;