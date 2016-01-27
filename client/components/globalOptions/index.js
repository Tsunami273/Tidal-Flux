var OffsetOption = require('./Offset.js');
var KeybindOption = require('./Keybinds.js');
var NoFailOption = require('./NoFail.js');

GOptions = React.createClass({
	getInitialState: function(){
		var curr = store.getState();
		return {
			showKeybinds: false,
			showOffset: false,
			showNoFail: false,
			keybinds: curr.keyBinds,
			offset: curr.globalOffset,
			noFail: curr.noFail
		}
	},
	toggleOffsetOptions: function(){
		this.setState({showOffset: !this.state.showOffset});
	},
	toggleKeybindOptions: function(){
		this.setState({showKeybinds: !this.state.showKeybinds});
	},
	toggleNoFail: function(){
		this.setState({showNoFail: !this.state.showNoFail});
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

			<div id="noFail" className="clickyGO" onClick={this.toggleNoFail}>
				<h3>No Fail</h3>
			</div>
			<NoFailOption show={this.state.showNoFail} noFail={this.state.noFail} />

			<div id="bMainMenu" className="clickyGO" onClick={this.goToMainMenu}>
				<h3>Back to Main Menu</h3>
			</div>

		</div>
		);	
	}
});
module.exports = GOptions;
