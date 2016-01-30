var NoFailOption = React.createClass({
    getInitialState: function(){
      var noFail = this.props.noFail;
      return {noFail: noFail};
    },
    updateNoFail:function(event){
      this.setState({noFail: !this.state.noFail});
    },
    submitNoFail:function(event){
      event.preventDefault();
      store.dispatch({type:'SET_NO_FAIL', noFail: this.state.noFail});
    },
    render: function(){
      var failOption = (
        <div id="fail">
        <form>
          <input type="checkbox" checked={this.state.noFail} onChange={this.updateNoFail}/>No Fail? <br />
          <div id="failButton" onClick={this.submitNoFail}>Save</div>
        </form>
        </div>
        )
        return (
          <div>
          {this.props.show ? failOption : null}
          </div>
        );
    }
});
module.exports = NoFailOption;