var KeybindOption = React.createClass({
    getInitialState: function(){
      return {};
    },
    render: function() {

        return (
          <div>
          {this.props.show ? <div>WOOF</div> : null}
          </div>
        );
    }
});
module.exports = KeybindOption;
