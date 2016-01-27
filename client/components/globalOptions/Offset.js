var OffsetOption = React.createClass({
    getInitialState: function(){
      var offset = this.props.offset;
      return {offset: offset};
    },
    updateOffset:function(event){
      this.setState({offset: event.target.value});
    },
    submitOffset:function(){
      //ADD SESSION TOKEN VALIDATION HERE.
      var token = store.getState().token;
      $.ajax({
        url: '/api/player/offset',
        dataType: 'json',
        type: 'POST',
        data: { token: token, offset: parseInt(this.state.offset) },
        success: function(data) {
          console.log('Offset saved.');
        }.bind(this),
        error: function(xhr, status, err) {
          console.log('Could not set offset.');
        }.bind(this)
      });
      store.dispatch(setOffset(parseInt(this.state.offset)));
    },
    render: function() {
      var dog = (<span>
        <input value={this.state.offset} onChange={this.updateOffset}></input>
        <span className="savebutton" onClick={this.submitOffset}>  Save</span> 
        </span>
        )
        return (
          <div>
          {this.props.show ? dog : null}
          </div>
        );
    }
});
module.exports = OffsetOption;
