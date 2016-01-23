var OffsetOption = require('./Offset.js');
var KeybindOption = require('./Keybinds.js');

GOptions = React.createClass({
	getInitialState: function(){
		var curr = store.getState();
		return {
			showKeybinds: false,
			showOffset: false,
			keybinds: curr.keyBinds,
			offset: curr.globalOffset
		}
	},
	toggleOffsetOptions: function(){
		this.setState({showOffset: !this.state.showOffset});
	},
	toggleKeybindOptions: function(){
		this.setState({showKeybinds: !this.state.showKeybinds});
	},
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
			<div id="offset" className="clickyGO" onClick={this.toggleOffsetOptions}>
				<h3>Offset</h3>
			</div>
			<OffsetOption show={this.state.showOffset} offset={this.state.offset} />
			<div id="keyBindings" className="clickyGO" onClick={this.toggleKeybindOptions}>
				<h3>Key Bindings</h3>
			</div>
			<KeybindOption show={this.state.showKeybinds} keybinds={this.state.keybinds} />
			<div id="bMainMenu" className="clickyGO" onClick={this.goToMainMenu}>
				<h3>Back to Main Menu</h3>
			</div>

		</div>
		);	
	}
});
module.exports = GOptions;
