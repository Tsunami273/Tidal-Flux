var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
    getInitialState: function() {
      return {dog: false};
    },
    handleClick: function(event) {
      this.setState({dog: !this.state.dog});
    },
    render: function() {
      var text = this.state.dog ? 'Woof, Bark' : 'Hello, World';
        return (
        <div onClick={this.handleClick}>
          {text}
        </div>
        );
    }
});

ReactDOM.render(<HelloWorld />, document.getElementById('content'));