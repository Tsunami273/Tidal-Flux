var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
    getInitialState: function() {
      return {dog: null};
    },
    handleChange: function(event) {
      this.setState({dog: event.target.value});
    },
    render: function() {
      var text = this.state.dog ? 'Hello, ' + this.state.dog : '';
        return (
        <div>
          {text}
          <br />
          What is your name? <input type="text" value={this.state.dog} onChange={this.handleChange} />
        </div>
        );
    }
});

ReactDOM.render(<HelloWorld />, document.getElementById('content'));