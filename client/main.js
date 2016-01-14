// putting these on the window so our components in other files can use them.
window.React = require('react');
window.ReactDOM = require('react-dom');
window.Redux = require('redux');
var reducers = require('./reducers/');
var components = require('./components/');
window.store = Redux.createStore(reducers.nav);
 

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
      // ReactDOM.render(<Login />, document.getElementById('content'));
      return;
    case 'SIGNUP':
      // ReactDOM.render(<Signup />, document.getElementById('content'));
      return;  
  }
}

// tell store to run render function when state changes.
store.subscribe(render);
// initial render.
render();
