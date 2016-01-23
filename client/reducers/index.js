//evetually export these to other files and import all reducers to this file and combine them.
const main = function(state, action){
  state = state || {
  page:'MAIN',
  selectedSong:{title:'Reflection (Sanaas Remix)', 
                artist:'Clion & Kamistory',
                id: 1,
                BPM: 173},//173
  username:'',
  keyBinds: ['s','d','f', 'j', 'k','l'],
  selectedDiff: 'Medium',
  scrollSpeed: 1,
  durations: [4000,3000,2000,1500,1100,750],
  }; 
  switch(action.type){
    case 'NAVIGATE':
      return Object.assign({}, state, {page: action.page}); // Object.assign() is equivalent to _.extend()
    case 'SELECT_SONG':
      return Object.assign({}, state, {selectedSong: action.selected});
    case 'SIGN_IN':
      return Object.assign({}, state, {username: action.username});
    case 'SET_SCORE':
      return Object.assign({}, state, {score: action.score, judges: action.judges});
    case 'SET_DIFF':
      return Object.assign({}, state, {selectedDiff: action.diff});
    case 'SET_SCROLL':
      return Object.assign({}, state, {scrollSpeed: action.scroll})
    default:
      return state;
  }
}
module.exports.main = main;
