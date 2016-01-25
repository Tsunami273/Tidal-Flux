var KeybindOption = React.createClass({
    getInitialState: function(){
      var keyBinds = store.getState().keyBinds;
      return {
        lane1: keyBinds[0],
        lane2: keyBinds[1],
        lane3: keyBinds[2],
        lane4: keyBinds[3],
        lane5: keyBinds[4],
        lane6: keyBinds[5]
      };
    },
    updateKeyBind: function(event){

    },
    render: function() {
      var lane1 = this.state.lane1;
      var lane2 = this.state.lane2;
      var lane3 = this.state.lane3;
      var lane4 = this.state.lane4;
      var lane5 = this.state.lane5;
      var lane6 = this.state.lane6;
      var bindings = (
        <div>
          <div value="0">curent lane 1: {lane1}</div>
          <div value="1">curent lane 2: {lane2}</div>
          <div value="2">curent lane 3: {lane3}</div>
          <div value="3">curent lane 4: {lane4}</div>
          <div value="4">curent lane 5: {lane5}</div>
          <div value="5">curent lane 6: {lane6}</div>
        </div>
        )
      return (
        <div>
        {this.props.show ? bindings : null}
        </div>
      );
    }
});
module.exports = KeybindOption;
