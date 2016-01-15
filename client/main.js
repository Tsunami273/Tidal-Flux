// putting these on global scope so our components in other files can use them.
React = require('react');
ReactDOM = require('react-dom');
Redux = require('redux');

keypress = require('keypress.js').keypress; 
listener = new keypress.Listener();

var reducers = require('./reducers/');
require('./actions/');
store = Redux.createStore(reducers.nav);
require('./components/');


// tell when components should render.
var render = function(){
  // this function should handle rendering of seperate pages e.g if state.page is 'MAIN' render the main menu.
  console.log(store.getState());
  switch(store.getState().page){
    case 'MAIN':
      ReactDOM.render(<MainMenu />, document.getElementById('content'));
      return;
    case 'SELECT':
      ReactDOM.render(<SongSelect />, document.getElementById('content'));
      return;
    case 'PLAY':
      ReactDOM.render(<SongPlay />, document.getElementById('content'));
      return;
    case 'SCORE':
      ReactDOM.render(<ScoreScreen />, document.getElementById('content'));
      return;
    case 'LOGIN':
      ReactDOM.render(<Login />, document.getElementById('content'));
      return;
    case 'SIGNUP':
      ReactDOM.render(<Signup />, document.getElementById('content'));
      return;  
  }
}

// tell store to run render function when state changes.
store.subscribe(render);
// initial render.
render();
listener.register_many([{
      "keys"              : "",
      "on_keydown"        : function(){
         store.dispatch(navigateToPage('SELECT'));
      },
      "on_keyup"          : function(){
        console.log('hey');
      }
  }]);
