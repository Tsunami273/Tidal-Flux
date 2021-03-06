var KeybindOption = React.createClass({
    getInitialState: function(){
      var keyBinds = store.getState().keyBinds;
      return {
        lane1: keyBinds[0],
        lane2: keyBinds[1],
        lane3: keyBinds[2],
        lane4: keyBinds[3],
        lane5: keyBinds[4],
        lane6: keyBinds[5],
        hide:'',
        error: ''
      };
    },
    updateKeyBind: function(event){
      event.preventDefault();
      var keybinds = [this.state.lane1, this.state.lane2, this.state.lane3, this.state.lane4, this.state.lane5, this.state.lane6];
      var token = store.getState().token;
      if(store.getState().username){
      $.ajax({
        url: '/api/player/keybinds',
        dataType: 'json',
        type: 'POST',
        data: { token: token, keybinds: keybinds },
        success: function(data) {
          console.log('Keybindings saved.');
        }.bind(this),
        error: function(xhr, status, err) {
          console.log('could not set keybinds');
        }.bind(this)
      });
      var kbString = JSON.stringify(keybinds);
      window.localStorage.setItem('keybinds', kbString);
      }
      store.dispatch({type:'SET_KEY_BINDS', keybinds: keybinds});
    },
    setKeyBind: function(event){
      var laneNum = event.target.name;
      var value = event.target.value;
      if(laneNum === '1'){
        if(value === ''){
          this.setState({hide:'hidden'})
        }
        else{
          this.setState({hide:''});
        }
        this.setState({lane1: value});
      }
      else if(laneNum === '2'){
        if(value === ''){
          this.setState({hide:'hidden'})
        }
        else{
          this.setState({hide:''});
        }
        this.setState({lane2: value});
      }
      else if(laneNum === '3'){
        if(value === ''){
          this.setState({hide:'hidden'})
        }
        else{
          this.setState({hide:''});
        }
        this.setState({lane3: value});
      }
      else if(laneNum === '4'){
        if(value === ''){
          this.setState({hide:'hidden'})
        }
        else{
          this.setState({hide:''});
        }
        this.setState({lane4: value});
      }
      else if(laneNum === '5'){
        if(value === ''){
          this.setState({hide:'hidden'})
        }
        else{
          this.setState({hide:''});
        }
        this.setState({lane5: value});
      }
      else{
        if(value === ''){
          this.setState({hide:'hidden'})
        }
        else{
          this.setState({hide:''});
        }
        this.setState({lane6: value});
      }
    },
    render: function() {
      var lane1 = this.state.lane1;
      var lane2 = this.state.lane2;
      var lane3 = this.state.lane3;
      var lane4 = this.state.lane4;
      var lane5 = this.state.lane5;
      var lane6 = this.state.lane6;
      var hide = this.state.hide;
      var bindings = (
        <div id="keyContain">
          <form>
            lane 1: <input name="1" type="text" maxLength="1" value={lane1} onChange={this.setKeyBind}/> 
            <br />
            <br />
            lane 2: <input name="2" type="text" maxLength="1" value={lane2} onChange={this.setKeyBind}/> 
            <br />
            <br />
            lane 3: <input name="3" type="text" maxLength="1" value={lane3} onChange={this.setKeyBind}/> 
            <br />
            <br />
            lane 4: <input name="4" type="text" maxLength="1" value={lane4} onChange={this.setKeyBind}/> 
            <br />
            <br />
            lane 5: <input name="5" type="text" maxLength="1" value={lane5} onChange={this.setKeyBind}/> 
            <br />
            <br />
            lane 6: <input name="6" type="text" maxLength="1" value={lane6} onChange={this.setKeyBind}/> 
            <br />
            <br />
            <div id="keyButton" onClick={this.updateKeyBind}>Save</div>
          </form>
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
