var React = require('react');
var ReactDOM = require('react-dom');
var Redux = require('redux');
var reducers = require('./reducers/');

// var pages = {
//   MAIN: HelloWorld
// }

const helloMessage = reducers.helloMessage;
var HelloWorld = React.createClass({
    handleChange: function(event) {
      store.dispatch({
        type: 'CHANGE',
        text: event.target.value
      });
    },
    render: function() {
      var text = store.getState().text ? 'Hello, ' + store.getState().text : ''
        return (
        <div>
          {text}
          <br />
          What is your name? <input type="text" value={store.getState().text} onChange={this.handleChange} />
        </div>
        );
    }
});
const store = Redux.createStore(helloMessage);
store.subscribe(function(){
  console.log(store.getState());
  ReactDOM.render(<HelloWorld />, document.getElementById('content'));
});

const render = function(){
  var state = store.getState();
  console.log(state);

}

ReactDOM.render(<HelloWorld />, document.getElementById('content'));