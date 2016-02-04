React = require('react');
ReactDOM = require('react-dom');
Redux = require('redux');
classNames = require('classnames');
$ = require('jquery');
d3 = require('d3');
keypress = require('keypress.js').keypress; 
listener = new keypress.Listener();

var reducers = require('./reducers/');
require('./actions/');
store = Redux.createStore(reducers.main);
require('./components/');

// check for session token and settings. 
if(window.localStorage.getItem('username')){
  var username = window.localStorage.getItem('username');
  var token = window.localStorage.getItem('token');
  var offset = parseInt( window.localStorage.getItem('offset') );
  var keybinds = JSON.parse( window.localStorage.getItem('keybinds') );
  store.dispatch( signIn(username, token, offset, keybinds) );
}

var domContainerNode = document.getElementById('content');
// tell when components should render.
var render = function(){
  // this function should handle rendering of seperate pages e.g if state.page is 'MAIN' render the main menu.
  switch(store.getState().page){
    case 'MAIN':
      ReactDOM.unmountComponentAtNode(domContainerNode)
      ReactDOM.render(<MainMenu />, domContainerNode);
      return;
    case 'SELECT':
      ReactDOM.unmountComponentAtNode(domContainerNode)
      ReactDOM.render(<SongSelect />, domContainerNode);
      return;
    case 'PLAY':
      ReactDOM.unmountComponentAtNode(domContainerNode)
      ReactDOM.render(<SongPlay />, domContainerNode);
      return;
    case 'SCORE':
      ReactDOM.unmountComponentAtNode(domContainerNode)
      ReactDOM.render(<ScoreScreen />, domContainerNode);
      return;
    case 'LOGIN':
      ReactDOM.unmountComponentAtNode(domContainerNode)
      ReactDOM.render(<Login />, domContainerNode);
      return;
    case 'SIGNUP':
      ReactDOM.unmountComponentAtNode(domContainerNode)
      ReactDOM.render(<Signup />, domContainerNode);
      return; 
    case 'GOPTIONS':
      ReactDOM.unmountComponentAtNode(domContainerNode)
      ReactDOM.render(<GOptions />, domContainerNode); 
      return; 
    case 'CREDITS':
      ReactDOM.unmountComponentAtNode(domContainerNode)
      ReactDOM.render(<Credits />, domContainerNode); 
      return;
    case 'LEADER':
      ReactDOM.unmountComponentAtNode(domContainerNode)
      ReactDOM.render(<Leader />, domContainerNode); 
      return;
    case 'FORGOT':
      ReactDOM.unmountComponentAtNode(domContainerNode)
      ReactDOM.render(<Forgot />, domContainerNode); 
      return;        
    case 'TUTORIAL':
      ReactDOM.unmountComponentAtNode(domContainerNode)
      ReactDOM.render(<Tutorial />, domContainerNode); 
      return;
    default:
      ReactDOM.unmountComponentAtNode(domContainerNode)
      ReactDOM.render(<MainMenu />, domContainerNode);
      return;
  }
}

// tell store to run render function when state changes.
store.subscribe(render);
// initial render.
render();
