const helloMessage = function(state, action){
  state = state || {page:'MAIN'};
  switch(action.type){
    case 'CHANGE':
      return Object.assign({}, state, {text: action.text});
    default:
      return state;
  }
}
module.exports.helloMessage = helloMessage;