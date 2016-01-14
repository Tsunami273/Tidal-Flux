var React = require('react');
var ReactDOM = require('react-dom');
var Redux = require('redux');
// var components = require('./components/');
// var store = require('./store/');
// var reduces = require('./reducers/');
const helloMessage = function(state, action){
  state = state || undefined;
  switch(action.type){
    case 'CHANGE':
      return action.text;
    default:
      return state;
  }
}
var HelloWorld = React.createClass({
    handleChange: function(event) {
      store.dispatch({
        type: 'CHANGE',
        text: event.target.value
      });
    },
    render: function() {
      var text = store.getState() ? 'Hello, ' + store.getState() : ''
        return (
        <div>
          {text}
          <br />
          What is your name? <input type="text" value={store.getState()} onChange={this.handleChange} />
        </div>
        );
    }
});
const store = Redux.createStore(helloMessage);
store.subscribe(function(){
  ReactDOM.render(<HelloWorld />, document.getElementById('content'));
});



ReactDOM.render(<HelloWorld />, document.getElementById('content'));