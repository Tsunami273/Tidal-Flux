//evetually export these to other files and import all reducers to this file and combine them.
const nav = function(state, action){
  state = state || {page:'MAIN'}; // main menu is default page rendered.
  switch(action.type){
    case 'NAVIGATE':
      return Object.assign({}, state, {page: action.page}); // Object.assign() is equivalent to _.extend()
    default:
      return state;
  }
}
module.exports.nav = nav;
